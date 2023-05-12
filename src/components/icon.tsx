import dynamic from "next/dynamic";
import React from "react";

import styles from "@/styles/icon.module.scss";

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

export function getFontAwesomeIcon(icon: string) {
	if (!icon) icon = "FaRegQuestionCircle";
	return dynamic((): any => import("react-icons/fa").then(icons => icons[icon as keyof typeof icons]));
}
