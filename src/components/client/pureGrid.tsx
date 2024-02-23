"use client";

export default function PureGrid( { ...props }: JSX.IntrinsicElements["div"] ) {
	props.className ??= "pure-g";

	return <div {...props}>{props.children}</div>;
}
