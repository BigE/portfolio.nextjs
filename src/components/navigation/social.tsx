import { TypeSocialIcons } from "@/@types/contentful/TypeSocialIcons";

import styles from "@/styles/navigation/social.module.scss";
import Icon from "../icon";

type Props = {
	items: any;
};

export default function SocialNavigation(props: Props) {
	return <nav role="navigation" aria-label="Social" className={styles.social}>
		<ul className="pure-menu-list pure-menu-horizontal">
			{props.items.map((item: TypeSocialIcons<"WITHOUT_UNRESOLVABLE_LINKS", string>) => {

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
