import { TypeSocialIcons } from "@/@types/contentful/TypeSocialIcons";

import styles from "@/styles/navigation/social.module.scss";
import Icon from "../icon";

type Props = {
	items: TypeSocialIcons<"WITHOUT_UNRESOLVABLE_LINKS", string>[];
};

export default function SocialNavigation( {items, ...props}: Props & JSX.IntrinsicElements["nav"]) {
	props.className = [styles.social, props.className].join(' ').trim();

	return <nav role="navigation" aria-label="Social" {...props}>
		<ul className="pure-menu-list pure-menu-horizontal">
			{items.map(item => {
				return (
					<li key={item.sys.id} className="pure-menu-item">
						<a href={item.fields.url} target="_blank" className={`pure-menu-link link ${styles.link}`} title={item.fields.url}>
							<Icon className={styles.text} icon={item.fields.icon?.fields.name} />
						</a>
					</li>
				);
			})}
		</ul>
	</nav>;
}
