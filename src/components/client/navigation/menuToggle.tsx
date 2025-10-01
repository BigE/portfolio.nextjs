"use client";

import { toggleMenu } from "@BigE/portfolio.css/js/main";

import styles from "@BigE/portfolio.css/scss/navigation/menuToggle.module.scss";
import layoutStyles from "@BigE/portfolio.css/scss/layout.module.scss";

import Toggle, { ToggleType } from "./toggle";

export type MenuToggleType = ToggleType;

export default function MenuToggle({
	icon,
	...props
}: MenuToggleType & JSX.IntrinsicElements["button"]) {
	icon ??= "FaBars";
	props.id = "menuToggle";
	props.className = [styles.toggle, styles["menu-toggle"], props.className]
		.join(" ")
		.trim();
	props["aria-controls"] ??= "menu";
	props["aria-expanded"] ??= "false";
	props["aria-label"] ??= "Toggle Menu";
	props.onClick = () => toggleStyles(props["aria-controls"]!);

	return <Toggle icon={icon} {...props} />;
}

export function toggleStyles(menuId: string) {
	toggleMenu(layoutStyles["header-visible"], menuId);
}
