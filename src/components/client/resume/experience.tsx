import { Document } from "@contentful/rich-text-types";

import print from "@BigE/portfolio.css/scss/print.module.scss";
import styles from "@BigE/portfolio.css/scss/components/experience.module.scss";
import { ExternalLinkIcon } from "../icon";
import RichText from "../richtext";

export type ExperienceProps = {
	name: string;
	positions: string[];
	start: string;
	end?: string;
	url?: string;
	shortDescription?: string;
	description: Document;
};

export type PersonalExperienceProps = ExperienceProps;

export type ProfessionalExperienceProps = Omit<ExperienceProps, "name"> & {
	company: string;
};

export default function Experience({
	name,
	positions,
	start,
	end,
	url,
	shortDescription,
	description,
	...props
}: ExperienceProps & React.JSX.IntrinsicElements["section"]) {
	const startDate = new Date(start);
	const endDate = end ? new Date(end) : undefined;

	props.className = [styles.experience, props.className].join(" ").trim();

	return (
		<section {...props}>
			<header className={styles.header}>
				<h3 className={`${styles.company} float-left`}>{name}</h3>
				<h4 className={`${styles.position} float-right`}>
					{positions.join(", ")}
				</h4>
				{(url && (
					<a href={url}>
						<h5 className={`${styles.location} float-left clear`}>
							{url} <ExternalLinkIcon className={print["no-print"]} />
						</h5>
					</a>
				)) || (
					<div
						className={`${styles.location} float-left clear`}
					></div>
				)}
				<h6 className={`${styles.employment} float-right`}>
					{startDate.getFullYear()} to{" "}
					{endDate ? endDate.getFullYear() : "current"}
				</h6>
				<div className="clear"></div>
			</header>
			{shortDescription && (
				<div
					className={[styles.body, styles.shortDescription].join(" ")}
				>
					{shortDescription}
				</div>
			)}
			<div className={styles.body}>
				<RichText className={styles.richtext} document={description} />
			</div>
		</section>
	);
}

export function PersonalExperience(props: PersonalExperienceProps) {
	return <Experience className={styles.personal} {...props} />;
}

export function ProfessionalExperience({
	company,
	...props
}: ProfessionalExperienceProps) {
	return <Experience name={company} {...props} />;
}
