import dynamic from "next/dynamic";
import React from "react";

import styles from "@/styles/icon.module.scss";

export interface IconProps {
	link?: boolean;
	icon: string;
}

export default function Icon({link, icon, ...props}: IconProps & JSX.IntrinsicElements["span"]) {
	const FontAwesomeIcon = getFontAwesomeIcon(icon);
	props.className = [styles.icon, link? styles.link : '', props.className].join(' ').trim();

	return <span {...props}>
		<FontAwesomeIcon />
	</span>
}

export function getFontAwesomeIcon(icon: string) {
	if (!icon) icon = "FaRegQuestionCircle";
	return dynamic((): any => import("react-icons/fa").then(icons => icons[icon as keyof typeof icons]));
}
