import { MutableRefObject, useRef } from "react";

import styles from "@/styles/navigation/primary.module.scss";

var scrollEndTimer: NodeJS.Timer | undefined;
export type MenuItems = MutableRefObject<NodeListOf<Element> | undefined> | undefined;

export function clearActive(menu_items: MenuItems) {
	if (!menu_items) return;

	menu_items.current?.forEach(element => {
		element.classList.remove("pure-menu-active");
		element.classList.remove(styles.active);
	});
}

export function handleClick(event: React.MouseEvent, menu_items: MenuItems, setClicked: CallableFunction) {
	const targetElement = (event.target as Element).closest('a');
	if (!targetElement) return;

	clearActive(menu_items);

	if (targetElement && targetElement.parentElement && targetElement.parentElement.classList.contains('pure-menu-item')) {
		setClicked(true);
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

export function handleScroll(event: Event, clicked: boolean, menu_items: MenuItems) {
	if (clicked) return;

	const elem = (document.scrollingElement || document.documentElement),
		top = elem.scrollTop,
		elements = Array.prototype.slice.call(document.body.querySelectorAll("section.menu-block")).reverse();

	clearActive(menu_items);

	for (var i = 0; i < elements.length; i++) {
		if (top >= (elements[i].offsetTop - 200) && elem.scrollTop > 0 && menu_items) {
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
