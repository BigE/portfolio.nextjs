"use client";

export default function PureGrid({
	...props
}: React.JSX.IntrinsicElements["div"]) {
	props.className ??= "pure-g";

	return <div {...props}>{props.children}</div>;
}
