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
	return <a id="menuToggle" className={Array(styles.menuToggle, props.className).join(' ')} onClick={toggleStyles}>
		<Icon className={styles.toggle} icon="FaBars" />
	</a>;
}
