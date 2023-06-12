import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

import { IResume } from "@/@types/generated/contentful";
import styles from "@/styles/resume.module.scss";

export type ResumeProps = {
	resume: IResume;
};

export default function Resume(props: ResumeProps) {
	return <div className={styles.resume}>
		<section id="objective" className={`${styles.section} ${styles.objective}`}>
			<h2>Objective</h2>
			<div className={styles.content}>{props.resume.fields.objective}</div>
		</section>
		<section id="skills" className={`${styles.section} ${styles.skills}`}>
			<h2>Skills</h2>
			<div className={styles.content}>{documentToReactComponents(props.resume.fields.skills)}</div>
		</section>
		<section className={styles.section}>
			<h2>Professional Experience</h2>
			{props.resume.fields.professionalExperience?.map(experience => {
				console.log(experience);

				return <section key={experience.sys.id} className={styles.content}>
					<header>
						<h3>{experience.fields.companyName}</h3>
						<h4>{experience.fields.positionHeld.join(', ')}</h4>
						<h5>{experience.fields.startDate}{experience.fields.endDate? ` to ${experience.fields.endDate}` : ''}</h5>
					</header>
				</section>
			})}
		</section>
	</div>
}

export function renderResume(resume: IResume) {
	return <Resume key={resume.sys.id} resume={resume}></Resume>
}
