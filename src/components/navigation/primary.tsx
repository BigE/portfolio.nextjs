import Link from "next/link";

import styles from "@/styles/navigation/primary.module.scss";
import Icon from "../icon";
import { IPage, IPageSection } from "@/@types/generated/contentful";

export type NavigationProps = {
	className?: string;
	role?: string;
	items: {sections: IPageSection[], pages: IPage[] };
};

export default function Navigation( props: NavigationProps ) {
	const { sections, pages } = props.items;

	return <nav className={props.className} role={props.role}>
		<ul className="pure-menu-list">
			<li className="pure-menu-separator"></li>
			{sections && sections.map(section => {
				const href = `#${section.fields.slug}`;

				return <li key={section.sys.id} className="pure-menu-item">
					<a className={`pure-menu-link ${styles.link}`} href={href}>
						<span className={styles.text}>
							<Icon icon={section.fields.icon.fields.name} />
							{section.fields.headline}
						</span>
					</a>
				</li>
			})}
			{pages.length > 0 && <>
				<li className="pure-menu-separator"></li>
				{pages.map(page => {
					return <li key={page.sys.id} className="pure-menu-item">
						<Link className="pure-menu-link" href={page.fields.slug}>{page.fields.title}</Link>
					</li>;
				})}
			</>}
		</ul>
	</nav>
}
