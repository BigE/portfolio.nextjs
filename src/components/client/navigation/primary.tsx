"use client";

import { Dispatch, SetStateAction, useEffect, useState } from "react";

import styles from "@BigE/portfolio.css/scss/navigation/primary.module.scss";
import { TypePage, isTypePageSection } from "@/@types/contentful";
import * as navigation from "@/utils/navigation";
import Navigation, { NavigationItemType } from "./navigation";

export type PrimaryNavigationProps = {
	items: {
		home: TypePage<"WITHOUT_UNRESOLVABLE_LINKS", string>;
		pages: TypePage<"WITHOUT_UNRESOLVABLE_LINKS", string>[];
	};
	slug: string;
};

export default function PrimaryNavigation({
	items,
	slug,
	...props
}: PrimaryNavigationProps & JSX.IntrinsicElements["nav"]) {
	const [shouldScroll, setShouldScroll]: [
		boolean,
		Dispatch<SetStateAction<boolean>>,
	] = useState(true);
	//const menuItems = useContext(NavigationContext);

	const children: NavigationItemType[] = [];

	useEffect(() => {
		let timer: NodeJS.Timeout;

		const handleScroll = async () => {
			if (timer) clearTimeout(timer);
			if (!shouldScroll) {
				timer = setTimeout(() => {
					setShouldScroll(true);
				}, 150);
			}

			if (window.location.pathname === "/" && shouldScroll) {
				const menuItems = {
					current: document.body.querySelectorAll(
						"nav[id=menu] .pure-menu-item"
					),
				};
				navigation.handleScroll(menuItems);
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	});

	props["aria-label"] ??= "Primary";
	props.className = [props.className || "", styles.primary].join(" ").trim();
	props.role ??= "navigation";

	for (const section of items.home.fields.content) {
		if (!section || !isTypePageSection(section)) continue;

		children.push({
			key: section.sys.id,
			className: styles.item,
			linkClassName: styles.link,
			href: `/#${section.fields.slug}`,
			icon: section.fields.icon?.fields.name,
			iconClassName: styles.icon,
			label: section.fields.headline,
		});
	}

	if (children.length)
		children.push({
			key: Math.random().toString(36),
			className: styles.item,
			separator: true,
		});

	for (const page of items.pages) {
		children.push({
			key: page.sys.id,
			className: styles.item,
			linkClassName: [
				styles.link,
				slug == page.fields.slug
					? `pure-menu-active ${styles.active}`
					: undefined,
			]
				.join(" ")
				.trim(),
			href: page.fields.slug,
			icon: page.fields.icon?.fields.name,
			iconClassName: styles.icon,
			label: page.fields.title,
		});
	}

	if (items.pages.length)
		children.push({
			key: Math.random().toString(36),
			className: styles.item,
			separator: true,
		});

	return (
		<Navigation
			listClassName="pure-menu-horizontal"
			items={children}
			{...props}
		></Navigation>
	);
}
