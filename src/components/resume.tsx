"use server";

import { TypePersonalExperience, TypeProfessionalExperience, TypeResume, isTypePersonalExperience, isTypeProfessionalExperience } from "@/@types/contentful";
import {Experience, Resume } from "./client/resume";

export default async function renderResume(resume: TypeResume<"WITHOUT_UNRESOLVABLE_LINKS", string>) {
	let professionalExperience: React.ReactNode[] = [],
		personalExperience: React.ReactNode[] = [];

	if (resume.fields.professionalExperience) {
		for (const experience of resume.fields.professionalExperience) {
			if (!experience) continue;

			professionalExperience.push(await renderExperience(experience));
		}
	}

	if (resume.fields.personalExperience) {
		for (const experience of resume.fields.personalExperience) {
			if (!experience) continue;

			personalExperience.push(await renderExperience(experience));
		}
	}

	return <Resume
		key={resume.sys.id}
		title={resume.fields.title}
		headerLeft={resume.fields.headerLeft}
		headerRight={resume.fields.headerRight}
		objective={resume.fields.objective}
		skills={resume.fields.skills}
		professionalExperience={professionalExperience}
		personalExperience={personalExperience}
	/>;
}

export async function renderExperience(experience: TypePersonalExperience<"WITHOUT_UNRESOLVABLE_LINKS", string> | TypeProfessionalExperience<"WITHOUT_UNRESOLVABLE_LINKS", string>)
{
	if (isTypeProfessionalExperience(experience)) {
		return <Experience
			key={experience.sys.id}
			name={experience.fields.companyName}
			positions={experience.fields.positionHeld}
			start={experience.fields.startDate}
			end={experience.fields.endDate}
			url={experience.fields.companyUrl}
			description={experience.fields.description}
		/>;
	} else if (isTypePersonalExperience(experience)) {
		return <Experience
			key={experience.sys.id}
			name={experience.fields.projectName}
			positions={experience.fields.positionsHeld}
			start={experience.fields.startDate}
			end={experience.fields.endDate}
			url={experience.fields.projectUrl}
			description={experience.fields.description}
		/>;
	}
}
