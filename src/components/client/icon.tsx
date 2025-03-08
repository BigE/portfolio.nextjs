"use client";

import dynamic from "next/dynamic";
import { FaRegCircleQuestion } from "react-icons/fa6";

import styles from "@/styles/icon.module.scss";

type PartialIconProps = {
	link?: boolean;
};

export type IconProps = PartialIconProps & {
	icon?: string;
};

export default function Icon({
	link,
	icon,
	...props
}: IconProps & JSX.IntrinsicElements["span"]) {
	const FontAwesomeIcon = getFontAwesomeIcon(icon);

	props.className = [styles.icon, link ? styles.link : "", props.className]
		.join(" ")
		.trim();
	return (
		<span {...props}>
			<FontAwesomeIcon />
		</span>
	);
}

export function ExternalLinkIcon({
	link,
	...props
}: PartialIconProps & JSX.IntrinsicElements["span"]) {
	return <Icon link={link} icon="FaArrowUpRightFromSquare" {...props} />;
}

export function getFontAwesomeIcon(icon?: string) {
	icon ??= "FaRegCircleQuestion";

	return dynamic(
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		(): any =>
			import("react-icons/fa6").then(
				(icons) => icons[icon as keyof typeof icons]
			),
		{
			loading: () => <FaRegCircleQuestion />,
		}
	);
}
