import styles from "@/styles/navigation/toggle.module.scss";
import Icon from "../icon";

export type MenuToggleType = {
	className?: string;
};

export function toggleStyles() {
	document.body.classList.toggle(styles.showNav);
	document.getElementsByTagName("html")[0].style.overflowY = document.body.classList.contains(styles.showNav)? "hidden" : "scroll";
}

export default function MenuToggle({...props}: JSX.IntrinsicElements["button"]) {
	props.className = [styles.toggle, styles.menuToggle, props.className].join(' ').trim();
	props.onClick = props.onClick || toggleStyles;

	return <button id="menuToggle" aria-controls="menu" aria-expanded="false" aria-label="Toggle Menu" {...props}>
		<Icon icon="FaBars" aria-hidden="true" />
	</button>;
}
