"use server;"

import { renderButton, renderExperience, renderHero, renderResume } from "@/components";
import { getButton, getExperience, getHero, getResume } from "@/utils/contentful";
import { notFound } from "next/navigation";

type PreviewPageType = {
	params: {
		component: 'button' | 'hero' | 'personalExperience' | 'professionalExperience' | 'resume';
		id: string;
	}
};

export default async function PreviewPage({ params }: PreviewPageType) {
	const { component, id } = params;

	switch (component) {
		case 'button':
			const button = await getButton(id);
			return await renderButton(button);
		case 'personalExperience':
		case 'professionalExperience':
			const experience = await getExperience(id, component);
			return await renderExperience(experience);
		case 'hero':
			const hero = await getHero(id);
			return await renderHero(hero);
		case 'resume':
			const resume = await getResume(id);
			return await renderResume(resume);
		default:
			notFound();
	}
}