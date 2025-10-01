"use client";

import { highlightNavigationOnScroll } from "@BigE/portfolio.css/js/main";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { TypePage, isTypePageSection } from "@/@types/contentful";

import styles from "@BigE/portfolio.css/scss/navigation/primary.module.scss";
import navigationStyles from "@BigE/portfolio.css/scss/navigation/navigation.module.scss";

import Navigation, { NavigationItemType } from "./navigation";
import { toggleStyles } from "./menuToggle";

export type PrimaryNavigationProps = {
	items: {
		home: TypePage<"WITHOUT_UNRESOLVABLE_LINKS", string>;
		pages: TypePage<"WITHOUT_UNRESOLVABLE_LINKS", string>[];
	};
};

export default function PrimaryNavigation({
	items,
	...props
}: PrimaryNavigationProps & JSX.IntrinsicElements["nav"]) {
	const [shouldScroll, setShouldScroll]: [
		boolean,
		Dispatch<SetStateAction<boolean>>,
	] = useState(true);

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
				const menuItems = document.body.querySelectorAll(
					"nav[id=menu] .pure-menu-item"
				);
				//navigation.handleScroll(menuItems);
				highlightNavigationOnScroll(
					menuItems as unknown as HTMLLIElement[],
					navigationStyles.active
				);
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	});

	props["aria-label"] ??= "Primary";
	props.className = [props.className || "", styles.primary].join(" ").trim();
	props.id ??= "primary";
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
			onClick: () => toggleStyles(props.id!),
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
			linkClassName: styles.link,
			href: `/${page.fields.slug}`,
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
