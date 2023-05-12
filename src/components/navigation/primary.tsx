import Link from "next/link";

import styles from "@/styles/navigation/primary.module.scss";
import Icon from "../icon";
import { IPage, IPageSection } from "@/@types/generated/contentful";
import { MutableRefObject, useEffect, useRef, useState } from "react";

export type NavigationProps = {
	className?: string;
	role?: string;
	items: {sections: IPageSection[], pages: IPage[] };
};

export default function Navigation( props: NavigationProps ) {
	const { sections, pages } = props.items;
	const menu_items: MutableRefObject<NodeListOf<Element> | undefined> = useRef();
	const [ clicked, setClicked ] = useState(false);
	var scrollEndTimer: NodeJS.Timeout | undefined;

	useEffect(() => {
		function handleScroll(event: Event) {
			console.log(clicked);
			if (clicked) return;

			const elem = (document.scrollingElement || document.documentElement),
				top = elem.scrollTop,
				elements = Array.prototype.slice.call(document.body.querySelectorAll("section.menu-block")).reverse();

			clearActive();
			for (var i = 0; i < elements.length; i++) {
				if (top >= (elements[i].offsetTop - 200) && elem.scrollTop > 0) {
					menu_items.current?.forEach(item => {
						if (item.querySelector('.pure-menu-link')?.getAttribute('data-section') === elements[i].id) {
							item.classList.add("pure-menu-active");
							item.classList.add(styles.active);
						}
					});
					break;
				}
			}
		}

		menu_items.current = document.body.querySelectorAll('nav[role=main] .pure-menu-item');
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, [clicked]);

	function clearActive() {
		menu_items.current?.forEach(element => {
			element.classList.remove("pure-menu-active");
			element.classList.remove(styles.active);
		});
	}

	function handleClick(event: React.MouseEvent) {
		const targetElement = (event.target as Element).closest('a');
		if (!targetElement) return;

		setClicked(true);
		clearActive();

		if (targetElement && targetElement.parentElement && targetElement.parentElement.classList.contains('pure-menu-item')) {
			targetElement.parentElement.classList.add('pure-menu-active');
			targetElement.parentElement.classList.add(styles.active);
		}

		document.onscroll = event => {
			scrollEndTimer !== undefined && clearTimeout(scrollEndTimer);
			scrollEndTimer = setTimeout(() => {
				setClicked(false);
			}, 100);
		};
	}

	return <nav className={props.className} role={props.role}>
		<ul className="pure-menu-list">
			<li className="pure-menu-separator"></li>
			{sections && sections.map(section => {
				const href = `#${section.fields.slug}`;

				return <li key={section.sys.id} className="pure-menu-item">
					<a className={`pure-menu-link ${styles.link}`} href={href} data-section={section.fields.slug} onClick={handleClick}>
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
						<Link className="pure-menu-link" href={page.fields.slug}>{page.fields.title}</Link>
					</li>;
				})}
			</>}
		</ul>
	</nav>
}
