import styles from "@/styles/navigation/toggle.module.scss";
import Icon from "../icon";
import { useState } from "react";
import { handleToggle } from "@/utils/navigation";

export type MenuToggleType = {
	bodyStyles: string;
};

export default function MenuToggle(props: MenuToggleType) {
	const [ navOpen, setNavOpen ] = useState(false);

	return <a id="menuToggle" className={styles.menuToggle} onClick={() => { handleToggle(); setNavOpen((prev: boolean) => !prev); }}>
		<Icon className={styles.toggle} icon="FaBars" />
	</a>;
}
