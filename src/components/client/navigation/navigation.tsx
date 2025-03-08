"use client";

import Link from "next/link";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

import styles from "@/styles/navigation/primary.module.scss";
import { TypePage, isTypePageSection } from "@/@types/contentful";
import Icon from "../icon";
import * as navigation from "@/utils/navigation";

export type NavigationProps = {
	items: {
		home: TypePage<"WITHOUT_UNRESOLVABLE_LINKS", string>;
		pages: TypePage<"WITHOUT_UNRESOLVABLE_LINKS", string>[];
	};
	slug: string;
};

export default function Navigation({
	items,
	slug,
	...props
}: NavigationProps & JSX.IntrinsicElements["nav"]) {
	const [shouldScroll, setShouldScroll]: [
		boolean,
		Dispatch<SetStateAction<boolean>>,
	] = useState(true);
	//const menuItems = useContext(NavigationContext);

	useEffect(() => {
		let timer: NodeJS.Timeout;

		const handleScroll = async () => {
			if (timer) clearTimeout(timer);
			if (!shouldScroll) {
				timer = setTimeout(() => {
					setShouldScroll(true);
				}, 150);
			}

			if (window.location.pathname === "/" && shouldScroll) {
				const menuItems = {
					current: document.body.querySelectorAll(
						"nav[id=menu] .pure-menu-item"
					),
				};
				navigation.handleScroll(menuItems);
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	});

	props["aria-label"] ??= "Primary";
	props.id = "menu";
	props.role ??= "navigation";

	return (
		<nav {...props}>
			<ul className="pure-menu-list">
				<li className="pure-menu-separator"></li>
				{items.home.fields.content.map(
					(section) =>
						section &&
						isTypePageSection(section) && (
							<li key={section.sys.id} className="pure-menu-item">
								<a
									className={`pure-menu-link ${styles.link}`}
									href={`/#${section.fields.slug}`}
								>
									<span className={styles.text}>
										<Icon
											icon={
												section.fields.icon?.fields.name
											}
										/>
										{section.fields.headline}
									</span>
								</a>
							</li>
						)
				)}
			</ul>
			{items.pages.length > 0 && (
				<ul className="pure-menu-list">
					<li className="pure-menu-separator"></li>
					{items.pages.map((page) => (
						<li
							key={page.sys.id}
							className={`pure-menu-item ${slug == page.fields.slug ? `pure-menu-active ${styles.active}` : ""}`}
						>
							<Link
								className={`pure-menu-link ${styles.link}`}
								href={page.fields.slug}
							>
								<span className={styles.text}>
									<Icon
										icon={page.fields.icon?.fields.name}
									/>
									{page.fields.title}
								</span>
							</Link>
						</li>
					))}
				</ul>
			)}
		</nav>
	);
}
