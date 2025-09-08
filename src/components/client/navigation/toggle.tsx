"use client";

import styles from "@BigE/portfolio.css/scss/navigation/toggle.module.scss";
import Icon from "../icon";

export type ToggleType = {
	icon?: string;
};

export default function Toggle({
	icon,
	...props
}: ToggleType & JSX.IntrinsicElements["button"]) {
	icon ??= "FaBars";
	props.className = [styles.toggle, props.className || ""].join(" ").trim();

	return (
		<button {...props}>
			<Icon icon={icon} aria-hidden="true" />
		</button>
	);
}
