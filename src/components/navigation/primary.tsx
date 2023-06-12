import Link from "next/link";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";

import styles from "@/styles/navigation/primary.module.scss";
import Icon from "../icon";
import { NavigationContext } from "@/context/navigation";
import * as navigation from "@/utils/navigation";
import { IPage, IPageSection } from "@/@types/generated/contentful";

export type NavigationProps = {
	ariaLabel?: string;
	className?: string;
	items: {home: IPage, pages: IPage[] };
};

export default function Navigation( props: NavigationProps ) {
	const { home, pages } = props.items;
	const router = useRouter();
	const [ shouldScroll, setShouldScroll ] = useState(true);
	const menuItems = useContext(NavigationContext);
	const navItems: IPageSection[] = home.fields.content.filter(section => section.sys.contentType.sys.id === 'pageSection') as IPageSection[];

	useEffect(() => {
		var timer: NodeJS.Timeout;

		function handleScroll() {
			if (timer) clearTimeout(timer);
			if (!shouldScroll) {
				timer = setTimeout(() => {
					setShouldScroll(true);
				}, 150);
			}

			if (window.location.pathname === '/' && shouldScroll)
				navigation.handleScroll(menuItems);
		}

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, [menuItems, shouldScroll, setShouldScroll ]);

	function handleClick(event: React.MouseEvent) {
		setShouldScroll(false);
		navigation.handleClick(event, menuItems);
	}

	return <nav className={props.className} id="main" role="navigation" aria-label={props.ariaLabel || "Primary"}>
		<ul className="pure-menu-list">
			<li className="pure-menu-separator"></li>
			{navItems.map(section => {
				return <li key={section.sys.id} className="pure-menu-item">
					<a onClick={handleClick} className={`pure-menu-link ${styles.link}`} href={`/#${section.fields.slug}`}>
						<span className={styles.text}>
							<Icon icon={section.fields.icon.fields.name} />
							{section.fields.headline}
						</span>
					</a>
				</li>
			})}
			{pages.length > 0 && <>
				<li className="pure-menu-separator"></li>
				{pages.map(page => {
					return <li key={page.sys.id} className={`pure-menu-item ${router.query['slug'] == page.fields.slug? `pure-menu-active ${styles.active}` : ""}`}>
						<Link className={`pure-menu-link ${styles.link}`} href={page.fields.slug} onClick={(event: React.MouseEvent) => navigation.handleClick(event, menuItems)}>
							<span className={styles.text}>
								<Icon icon={page.fields.icon.fields.name} />
								{page.fields.title}
							</span>
						</Link>
					</li>;
				})}
			</>}
		</ul>
	</nav>
}
