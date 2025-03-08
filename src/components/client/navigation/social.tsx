import { TypeSocialIcons } from "@/@types/contentful";
import styles from "@/styles/navigation/social.module.scss";
import Icon from "../icon";

export type SocialNavigationProps = {
	items: TypeSocialIcons<"WITHOUT_UNRESOLVABLE_LINKS", string>[];
};

export default function SocialNavigation({
	items,
	...props
}: SocialNavigationProps & JSX.IntrinsicElements["nav"]) {
	const children: React.ReactNode[] = [];

	props.role ??= "navigation";
	props["aria-label"] ??= "Social";
	props.className = [styles.social, props.className].join(" ").trim();

	for (const item of items) {
		if (!item) continue;

		children.push(
			<li key={item.sys.id} className="pure-menu-item">
				<a
					href={item.fields.url}
					className={`pure-menu-link link ${styles.link}`}
					title={item.fields.url}
				>
					<Icon
						className={styles.text}
						icon={item.fields.icon?.fields.name}
					/>
				</a>
			</li>
		);
	}

	return (
		<nav {...props}>
			<ul className="pure-menu-list pure-menu-horizontal">{children}</ul>
		</nav>
	);
}
