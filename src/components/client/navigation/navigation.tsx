"use client";

import { TypePage } from "@/@types/contentful";
import styles from "@BigE/portfolio.css/scss/navigation/navigation.module.scss";
import Link from "next/link";
import Icon from "../icon";
import { MouseEventHandler } from "react";
import { usePathname } from "next/navigation";

export type NavigationItemType = {
	className?: string;
	href?: string;
	icon?: string;
	iconClassName?: string;
	key: string;
	label?: string;
	linkClassName?: string;
	onClick?: MouseEventHandler<HTMLAnchorElement>;
	page?: TypePage<"WITHOUT_UNRESOLVABLE_LINKS", string>;
	separator?: boolean;
};

export type NavigationProps = {
	items: NavigationItemType[];
	listClassName?: string;
} & Omit<JSX.IntrinsicElements["nav"], "children">;

export default function Navigation({
	items,
	listClassName,
	...props
}: NavigationProps) {
	const children: React.ReactNode[] = [];
	const pathName = usePathname();

	listClassName = ["pure-menu-list", styles.list, listClassName || ""]
		.join(" ")
		.trim();
	props.className = [styles.navigation, props.className || ""]
		.join(" ")
		.trim();

	items.map((item) => {
		if (!item) return;

		if (item.separator) {
			const className = [
				"pure-menu-separator",
				styles.item,
				item.className || "",
			]
				.join(" ")
				.trim();
			children.push(
				<li key={Math.random().toString(36)} className={className}></li>
			);
			return;
		}

		let className = ["pure-menu-item", styles.item, item.className || ""]
			.join(" ")
			.trim();
		const icon = !item.icon ? undefined : (
			<Icon className={item.iconClassName} icon={item.icon}></Icon>
		);
		const linkClassName = [
			"pure-menu-link",
			styles.link,
			item.linkClassName,
		]
			.join(" ")
			.trim();

		if (item.href && pathName === item.href) {
			className += ` pure-menu-active ${styles.active}`;
		}

		children.push(
			<li key={item.key} className={className}>
				{item.href && (
					<a
						className={linkClassName}
						href={item.href}
						onClick={item.onClick}
					>
						{icon}
						{item.label}
					</a>
				)}
				{item.page && (
					<Link
						className={linkClassName}
						href={item.page.fields.slug}
					>
						{icon}
						{item.label}
					</Link>
				)}
			</li>
		);
	});

	return (
		<nav {...props}>
			<ul className={listClassName}>{children}</ul>
		</nav>
	);
}
