import { MutableRefObject, useRef } from "react";

import styles from "@/styles/navigation/primary.module.scss";
import toggleStyles from "@/styles/navigation/toggle.module.scss";

var scrollEndTimer: NodeJS.Timer | undefined;
export type MenuItems = MutableRefObject<NodeListOf<Element> | undefined> | undefined;

export function clearActive(menu_items: MenuItems) {
	if (!menu_items) return;

	menu_items.current?.forEach(elem => {
		elem.classList.remove("pure-menu-active");
		elem.classList.remove(styles.active);
	});
}

export function handleClick(event: React.MouseEvent, menu_items: MenuItems) {
	const targetElement = (event.target as Element).closest('a');
	if (!targetElement) return;

	clearActive(menu_items);

	if (targetElement && targetElement.parentElement && targetElement.parentElement.classList.contains('pure-menu-item')) {
		targetElement.parentElement.classList.add('pure-menu-active');
		targetElement.parentElement.classList.add(styles.active);
		if (document.body.classList.contains(toggleStyles.showNav))
			handleToggle();
	}
}

export function handleScroll(event: Event, clicked: boolean, menu_items: MenuItems) {
	if (clicked) return;

	const elem = (document.scrollingElement || document.documentElement),
		top = elem.scrollTop,
		elements = Array.prototype.slice.call(document.body.querySelectorAll("section.menu-block")).reverse();

	clearActive(menu_items);

	for (var i = 0; i < elements.length; i++) {
		if (top >= (elements[i].offsetTop - 200) && elem.scrollTop > 0 && menu_items) {
			menu_items.current?.forEach(item => {
				if (item.querySelector('.pure-menu-link')?.getAttribute('href')?.replace(/.*#/, '') === elements[i].id) {
					item.classList.add("pure-menu-active");
					item.classList.add(styles.active);
				}
			});
			break;
		}
	}
}

export function handleToggle() {
	document.body.classList.toggle(toggleStyles.showNav);
	document.getElementsByTagName("html")[0].style.overflowY = document.body.classList.contains(toggleStyles.showNav)? "hidden" : "scroll";
}
