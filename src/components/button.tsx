import { Asset } from "contentful";
import Link from "next/link";

import styles from "@/styles/button.module.scss";
import Icon from "./icon";
import { IButton, IPage } from "@/@types/generated/contentful";

export interface ButtonProps {
	className?: string | undefined;
	document?: Asset | undefined;
	external?: string | undefined;
	fragment?: string | undefined;
	icon: string;
	iconClassName?: string;
	label: string;
	internal?: IPage | undefined;
	type?: "submit" | "reset" | "button" | undefined;
};

/**
 * <Link /> shown as a pure-button
 */
export default function Button( props: ButtonProps ) {
	const className = ["pure-button", styles.button, props.className].join(' ').trim();
	const href = getButtonHref(props);

	const children = [
		<Icon key={`${props.icon}-key`} icon={props.icon} className={props.iconClassName} />,
		props.label
	];

	if (props.external || props.document)
		return <a className={className} href={href}>{children}</a>
	else if (props.type)
		return <button className={className} type={props.type}>{children}</button>

	return <Link className={className} href={href} >{children}</Link>
}

export function getButtonHref( button: ButtonProps ): string {
	if (button.fragment) {
		return `#${button.fragment}`
	} else if (button.internal) {
		return button.internal.fields.slug;
	} else if (button.external) {
		return button.external;
	} else if (button.document) {
		return button.document.fields.file.url;
	}

	return '';
}

export function renderButton( button: IButton, className?: string | undefined, iconClassName?: string | undefined ) {
	return <Button
		key={button.sys.id}
		className={className}
		document={button.fields.document}
		external={button.fields.externalUrl}
		fragment={button.fields.pageFragment}
		icon={button.fields.icon.fields.name}
		iconClassName={iconClassName}
		internal={button.fields.internalPage as IPage | undefined}
		label={button.fields.label}
	/>;
}
