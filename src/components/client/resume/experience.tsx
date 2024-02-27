import { Document } from "@contentful/rich-text-types";

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
			<h3 className={styles.company}>{name}</h3>
			{url && <a href={url}><h4 className={styles.location}>{url} <Icon icon="FaExternalLinkAlt" /></h4></a>}
			<h5 className={`${styles.position} clear`}>{positions.join(', ')}</h5>
			<h6 className={styles.employment}>{startDate.getFullYear()} to {endDate? endDate.getFullYear() : 'current' }</h6>
			<div className="clear"></div>
		</header>
		<div className={styles.body}><RichText document={description} /></div>
	</section>;
}
