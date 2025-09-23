import { TypeSocialIcons } from "@/@types/contentful";
import styles from "@BigE/portfolio.css/scss/navigation/social.module.scss";
import Navigation, { NavigationItemType } from "./navigation";

export type SocialNavigationProps = {
	items: TypeSocialIcons<"WITHOUT_UNRESOLVABLE_LINKS", string>[];
};

export default function SocialNavigation({
	items,
	...props
}: SocialNavigationProps & JSX.IntrinsicElements["nav"]) {
	const children: NavigationItemType[] = [];

	props.role ??= "navigation";
	props["aria-label"] ??= "Social";
	props.className = [styles.social, props.className].join(" ").trim();

	for (const item of items) {
		if (!item) continue;

		children.push({
			key: item.sys.id,
			href: item.fields.url,
			icon: item.fields.icon?.fields.name,
			linkClassName: styles.link,
		});
	}

	return (
		<Navigation
			listClassName={`pure-menu-horizontal ${styles.list}`}
			items={children}
			{...props}
		/>
	);
}
