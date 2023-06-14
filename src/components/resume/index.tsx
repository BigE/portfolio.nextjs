import { Document } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

import { TypeResume } from "@/@types/contentful/TypeResume";
import styles from "@/styles/resume.module.scss";
import { renderPersonalExperience, renderProfessionalExperience } from "./experience";

export type ResumeProps = {
	objective: string;
	skills: Document;
	professionalExperience?: React.ReactNode;
	personalExperience?: React.ReactNode;
};

export default function Resume({
	objective,
	skills,
	professionalExperience,
	personalExperience,
	...props
}: ResumeProps & JSX.IntrinsicElements["div"]) {
	return <div className={styles.resume} {...props}>
		<section id="objective" className={`${styles.section} ${styles.objective}`}>
			<h2>Objective</h2>
			<div className={styles.content}>{objective}</div>
		</section>
		<section id="skills" className={`${styles.section} ${styles.skills}`}>
			<h2>Skills</h2>
			<div className={styles.content}>{documentToReactComponents(skills)}</div>
		</section>
		{professionalExperience && 
			<section className={styles.section}>
				<h2>Professional Experience</h2>
				<section className={styles.content}>{professionalExperience}</section>
			</section>
		}
		{personalExperience && 
			<section className={styles.section}>
				<h2>Personal Experience</h2>
				<section className={styles.content}>{personalExperience}</section>
			</section>
		}
	</div>
}

export function renderResume(resume: TypeResume<"WITHOUT_UNRESOLVABLE_LINKS", string>) {
	if (!resume) return <></>;

	return <Resume
		key={resume.sys.id}
		objective={resume.fields.objective}
		skills={resume.fields.skills}
		professionalExperience={resume.fields.professionalExperience?.map(experience => renderProfessionalExperience(experience))}
		personalExperience={resume.fields.personalExperience?.map(experience => renderPersonalExperience(experience))}
	/>
}

export { default as Experience, renderPersonalExperience, renderProfessionalExperience } from './experience';
