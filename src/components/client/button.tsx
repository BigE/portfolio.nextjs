"use client";

import Link from "next/link";

import styles from "@BigE/portfolio.css/scss/components/button.module.scss";
import Icon from "./icon";
import { Asset, Entry, EntrySkeletonType } from "contentful";
import { isTypePage } from "@/@types/contentful";

export type ButtonProps = {
	className?: string;
	document?: Asset;
	external?: string;
	fragment?: string;
	icon?: string;
	iconClassName?: string;
	internal?: Entry<EntrySkeletonType, "WITHOUT_UNRESOLVABLE_LINKS", string>;
	label: string;
	type?: "submit" | "reset" | "button";
};

export default function Button({ iconClassName, ...props }: ButtonProps) {
	const href = getButtonHref(props);

	iconClassName = [styles.icon, iconClassName].join(" ").trim();

	const children = [
		<Icon
			key={`${props.icon}-key`}
			icon={props.icon}
			className={iconClassName}
		/>,
		props.label,
	];

	if (props.className?.indexOf("pure-button") == -1)
		props.className = ["pure-button", styles.button, props.className]
			.join(" ")
			.trim();

	if (props.external || props.document)
		return (
			<a className={props.className} href={href}>
				{children}
			</a>
		);
	else if (props.type)
		return (
			<button className={props.className} type={props.type}>
				{children}
			</button>
		);

	return (
		<Link className={props.className} href={href}>
			{children}
		</Link>
	);
}

export function getButtonHref({ ...props }: ButtonProps): string {
	if (props.fragment) return `#${props.fragment}`;
	else if (props.internal && isTypePage(props.internal))
		return props.internal.fields.slug;
	else if (props.external) return props.external;
	else if (
		props.document &&
		typeof props.document.fields.file?.url === "string"
	)
		return props.document.fields.file.url;

	return "";
}
