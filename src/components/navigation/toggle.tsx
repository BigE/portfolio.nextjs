import { useState } from "react";

import styles from "@/styles/navigation/toggle.module.scss";
import Icon from "../icon";

export type MenuToggleType = {
	className?: string;
};

export function toggleStyles() {
	document.body.classList.toggle(styles.showNav);
	document.getElementsByTagName("html")[0].style.overflowY = document.body.classList.contains(styles.showNav)? "hidden" : "scroll";
}

export default function MenuToggle(props: MenuToggleType) {
	return <button id="menuToggle" className={Array(styles.toggle, styles.menuToggle, props.className).join(' ')} onClick={toggleStyles} aria-controls="menu" aria-expanded="false" aria-label="Toggle Menu">
		<Icon icon="FaBars" aria-hidden="true" />
	</button>;
}
