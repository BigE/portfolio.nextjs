import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";

import styles from "@/styles/navigation/primary.module.scss";
import Icon from "../icon";
import { NavigationContext } from "@/context/navigation";
import * as navigation from "@/utils/navigation";
import { IPage, IPageSection } from "@/@types/generated/contentful";

export type NavigationProps = {
	ariaLabel?: string;
	className?: string;
	items: {sections: IPageSection[], pages: IPage[] };
	role?: string;
};

export default function Navigation( props: NavigationProps ) {
	const { sections, pages } = props.items;
	const [ shouldScroll, setShouldScroll ] = useState(true);
	const menuItems = useContext(NavigationContext);

	useEffect(() => {
		var timer: NodeJS.Timeout;

		function handleScroll() {
			if (timer) clearTimeout(timer);
			if (!shouldScroll) {
				timer = setTimeout(() => {
					setShouldScroll(true);
				}, 150);
			}

			if (shouldScroll)
				navigation.handleScroll(menuItems);
		}

		if (menuItems)
			menuItems.current = document.body.querySelectorAll('nav[id=main] .pure-menu-item');

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
			{sections && sections.map(section => {
				return <li key={section.sys.id} className="pure-menu-item">
					<a onClick={handleClick} className={`pure-menu-link ${styles.link}`} href={`#${section.fields.slug}`}>
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
					return <li key={page.sys.id} className="pure-menu-item">
						<Link className={`pure-menu-link ${styles.link}`} href={page.fields.slug}>
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
