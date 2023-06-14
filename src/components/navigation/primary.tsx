import Link from "next/link";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";

import { isTypePageSection } from "@/@types/contentful/TypePageSection";
import { TypePage } from "@/@types/contentful/TypePage";

import styles from "@/styles/navigation/primary.module.scss";
import { NavigationContext } from "@/context/navigation";
import * as navigation from "@/utils/navigation";
import Icon from "../icon";

export type NavigationProps = {
	items: {home: TypePage<"WITHOUT_UNRESOLVABLE_LINKS", string>, pages: TypePage<"WITHOUT_UNRESOLVABLE_LINKS", string>[] };
};

export default function Navigation( {items, ...props}: NavigationProps & JSX.IntrinsicElements["nav"] ) {
	const { home, pages } = items;
	const router = useRouter();
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

	return <nav id="main" role="navigation" aria-label="Primary" {...props}>
		<ul className="pure-menu-list">
			<li className="pure-menu-separator"></li>
			{home.fields.content.map(section => {
				if (!section) return;
				else if (!isTypePageSection(section)) return;

				return <li key={section.sys.id} className="pure-menu-item">
					<a onClick={handleClick} className={`pure-menu-link ${styles.link}`} href={`/#${section.fields.slug}`}>
						<span className={styles.text}>
							<Icon icon={section.fields.icon?.fields.name} />
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
								<Icon icon={page.fields.icon?.fields.name} />
								{page.fields.title}
							</span>
						</Link>
					</li>;
				})}
			</>}
		</ul>
	</nav>
}
