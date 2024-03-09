import { Document } from "@contentful/rich-text-types";

import print from "@/styles/print.module.scss";
import styles from "@/styles/resume/experience.module.scss";
import Icon from "../icon";
import RichText from "../richtext";

export type ExperienceProps = {
	name: string;
	positions: string[];
	start: string;
	end?: string;
	url?: string;
	description: Document;
};

export default function Experience( {name, positions, start, end, url, description, ...props}: ExperienceProps & JSX.IntrinsicElements["section"]) {
	const startDate = new Date(start);
	const endDate = end? new Date(end) : undefined;

	props.className = [styles.experience, props.className].join(' ').trim();

	return <section {...props}>
		<header className={styles.header}>
			<h3 className={`${styles.company} float-left`}>{name}</h3>
			<h4 className={`${styles.position} float-right`}>{positions.join(', ')}</h4>
			{url && <a href={url}><h5 className={`${styles.location} float-left clear`}>{url} <Icon className={print.noPrint} icon="FaExternalLinkAlt" /></h5></a> || <div className={`${styles.location} float-left clear`}></div>}
			<h6 className={`${styles.employment} float-right`}>{startDate.getFullYear()} to {endDate? endDate.getFullYear() : 'current' }</h6>
			<div className="clear"></div>
		</header>
		<div className={styles.body}><RichText document={description} /></div>
	</section>;
}
