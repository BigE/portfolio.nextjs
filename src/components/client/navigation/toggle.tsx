"use client";

import styles from "@/styles/navigation/toggle.module.scss";
import Icon from "../icon";

export type MenuToggleType = {};

export default function MenuToggle( {...props}: MenuToggleType & JSX.IntrinsicElements["button"] ) {
	props.id = "menuToggle";
	props.className = [styles.toggle, styles.menuToggle, props.className].join(" ").trim();
	props.onClick = toggleStyles;
	props["aria-controls"] ??= "menu";
	props["aria-expanded"] ??= "false";
	props["aria-label"] ??= "Toggle Menu";

	return <button {...props}>
		<Icon icon="FaBars" aria-hidden="true" />
	</button>;
}

export function toggleStyles() {
	document.body.classList.toggle(styles.showNav);
	document.getElementsByTagName("html")[0].style.overflowY = document.body.classList.contains(styles.showNav)? "hidden" : "scroll";
}
