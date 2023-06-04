import styles from "@/styles/navigation/social.module.scss";
import Icon from "../icon";
import { ISocialIcons } from "@/@types/generated/contentful";

type Props = {
	items: any;
};

export default function SocialNavigation(props: Props) {
	return <nav role="navigation" aria-label="Social" className={styles.social}>
		<ul className="pure-menu-list pure-menu-horizontal">
			{props.items.map((item: ISocialIcons) => {

				return (
					<li key={item.sys.id} className="pure-menu-item">
						<a href={item.fields.url} target="_blank" className={`pure-menu-link link ${styles.link}`} title={item.fields.url}>
							<Icon className={styles.text} icon={item.fields.icon.fields.name} />
						</a>
					</li>
				);
			})}
		</ul>
	</nav>;
}
