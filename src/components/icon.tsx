import React from "react";

import styles from "@/styles/icon.module.scss";
import { getFontAwesomeIcon } from "@/utils/icon";

export interface IconProps {
	className?: string;
	link?: boolean;
	icon: string;
}

export default function Icon(props: IconProps) {
	const FontAwesomeIcon = getFontAwesomeIcon(props.icon);

	return <span className={[styles.icon, props.link === true? styles.link : '', props.className].join(' ').trim()}>
		<FontAwesomeIcon />
	</span>
}
