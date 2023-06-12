import { Asset, Entry, EntrySkeletonType } from "contentful";
import Link from "next/link";

import { isTypePage } from "@/@types/contentful/TypePage";

import styles from "@/styles/button.module.scss";
import Icon from "./icon";
import { TypeButton } from "@/@types/contentful/TypeButton";

export interface ButtonProps {
	callback?: CallableFunction;
	className?: string;
	document?: Asset;
	external?: string;
	fragment?: string;
	icon?: string;
	iconClassName?: string;
	label: string;
	internal?: Entry<EntrySkeletonType, "WITHOUT_UNRESOLVABLE_LINKS", string>;
	type?: "submit" | "reset" | "button";
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

	function handleClick(event: React.MouseEvent): void {
		if (props.callback) {
			props.callback(event);
		}
	}

	if (props.external || props.document || props.callback)
		return <a className={className} href={href} onClick={handleClick}>{children}</a>
	else if (props.type)
		return <button className={className} type={props.type}>{children}</button>

	return <Link className={className} href={href} >{children}</Link>
}

export function getButtonHref( button: ButtonProps ): string {
	if (button.fragment) {
		return `#${button.fragment}`
	} else if (button.internal && isTypePage(button.internal)) {
		return button.internal.fields.slug;
	} else if (button.external) {
		return button.external;
	} else if (button.document && typeof button.document.fields.file?.url === 'string') {
		return button.document.fields.file?.url;
	}

	return '';
}

export function renderButton( button: TypeButton<"WITHOUT_UNRESOLVABLE_LINKS", string>, className?: string, iconClassName?: string, callback?: CallableFunction ) {
	if (!button.fields) return;

	return <Button
		key={button.sys.id}
		className={className}
		document={button.fields.document}
		external={button.fields.externalUrl}
		fragment={button.fields.pageFragment}
		icon={button.fields.icon?.fields.name}
		iconClassName={iconClassName}
		internal={button.fields.internalPage}
		label={button.fields.label}
		callback={callback}
	/>;
}
