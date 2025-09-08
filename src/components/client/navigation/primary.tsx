"use client";

import Link from "next/link";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

import styles from "@BigE/portfolio.css/scss/navigation/primary.module.scss";
import { TypePage, isTypePageSection } from "@/@types/contentful";
import Icon from "../icon";
import * as navigation from "@/utils/navigation";
import Navigation, { NavigationItemType } from "./navigation";

export type PrimaryNavigationProps = {
	items: {
		home: TypePage<"WITHOUT_UNRESOLVABLE_LINKS", string>;
		pages: TypePage<"WITHOUT_UNRESOLVABLE_LINKS", string>[];
	};
	slug: string;
};

export default function PrimaryNavigation({
	items,
	slug,
	...props
}: PrimaryNavigationProps & JSX.IntrinsicElements["nav"]) {
	const [shouldScroll, setShouldScroll]: [
		boolean,
		Dispatch<SetStateAction<boolean>>,
	] = useState(true);
	//const menuItems = useContext(NavigationContext);

	const children: NavigationItemType[] = [];

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
	props.className = [props.className || "", styles.primary].join(" ").trim();
	props.id = "menu";
	props.role ??= "navigation";

	for (const section of items.home.fields.content) {
		if (!section || !isTypePageSection(section)) continue;

		children.push({
			key: section.sys.id,
			linkClassName: styles.link,
			href: `/#${section.fields.slug}`,
			icon: section.fields.icon?.fields.name,
			iconClassName: styles.icon,
			label: section.fields.headline,
		});
	}

	if (children.length)
		children.push({ key: Math.random().toString(36), separator: true });

	for (const page of items.pages) {
		children.push({
			key: page.sys.id,
			linkClassName: [
				styles.link,
				slug == page.fields.slug
					? `pure-menu-active ${styles.active}`
					: undefined,
			]
				.join(" ")
				.trim(),
			href: page.fields.slug,
			icon: page.fields.icon?.fields.name,
			iconClassName: styles.icon,
			label: page.fields.title,
		});
	}

	if (items.pages.length)
		children.push({ key: Math.random().toString(36), separator: true });

	return (
		<Navigation
			className={styles.primary}
			listClassName="pure-menu-horizontal"
			items={children}
		></Navigation>
	);

	return (
		<nav {...props}>
			<ul className="pure-menu-list pure-menu-horizontal">
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
				{items.pages.length > 0 && (
					<>
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
					</>
				)}
			</ul>
		</nav>
	);
}
