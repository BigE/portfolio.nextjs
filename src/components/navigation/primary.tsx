import Link from "next/link";

import styles from "@/styles/navigation/primary.module.scss";
import Icon from "../icon";
import { IPage, IPageSection } from "@/@types/generated/contentful";
import { useEffect } from "react";

export type NavigationProps = {
	className?: string;
	role?: string;
	items: {sections: IPageSection[], pages: IPage[] };
};

export default function Navigation( props: NavigationProps ) {
	const { sections, pages } = props.items;
	var clicked = false, menu_items = Array();

	useEffect(() => {
		menu_items = document.body.querySelectorAll('nav[role=main] .pure-menu-item');
		document.body.querySelectorAll('.menu-trigger').forEach(element => addEventListener('click', handleClick.bind(element)));
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	});

	function clearActive() {
		menu_items.forEach(element => {
			element.classList.remove("pure-menu-active");
			element.classList.remove(styles.active);
		});
	}

	function handleClick(event) {
		clicked = true;
		clearActive();

		if (this.parentNode.classList.contains('pure-menu-item')) {
			this.parentNode.classList.add('pure-menu-active');
		}

		var start = new Date().getTime(),
			elem = document.scrollingElement || document.documentElement,
			id = this.getAttribute('data-section'),
			from = elem.scrollTop,
			to = document.getElementById(id).offsetTop,
			timer = setInterval(function () {
				var step = Math.min(1, (new Date().getTime() - start) / 600);
				elem['scrollTop'] = (from + step * (to - from));
				if (step === 1) {
					clearInterval(timer);
					clicked = false;
				}
			}, 25);
		elem['scrollTop'] = from;
		event.preventDefault();
	}

	function handleScroll() {
		if (clicked) return;

		const elem = (document.scrollingElement || document.documentElement),
		      top = elem.scrollTop,
			  elements = Array.prototype.slice.call(document.body.querySelectorAll("section.menu-block")).reverse();

		clearActive();
        for (var i = 0; i < elements.length; i++) {
            if (top >= (elements[i].offsetTop - 200) && elem.scrollTop > 0) {
                menu_items.forEach(item => {
                    if (item.querySelector('.pure-menu-link').getAttribute('data-section') === elements[i].id) {
                        item.classList.add("pure-menu-active");
						item.classList.add(styles.active);
                    }
                });
                break;
            }
        }
	}

	return <nav className={props.className} role={props.role}>
		<ul className="pure-menu-list">
			<li className="pure-menu-separator"></li>
			{sections && sections.map(section => {
				const href = `#${section.fields.slug}`;

				return <li key={section.sys.id} className="pure-menu-item">
					<a className={`pure-menu-link ${styles.link}`} href={href} data-section={section.fields.slug}>
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
