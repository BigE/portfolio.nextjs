"use server";

import {
	renderButton,
	renderExperience,
	renderHero,
	renderResume,
} from "@/components";
import {
	getButton,
	getExperience,
	getHero,
	getResume,
} from "@/utils/contentful";
import { ExperienceType } from "@/utils/contentful/resume/experience";
import { notFound } from "next/navigation";

type PreviewPageType = Promise<{
	component: "button" | "hero" | "resume" | ExperienceType;
	id: string;
}>;

export default async function PreviewPage({
	params,
}: {
	params: PreviewPageType;
}) {
	const { component, id } = await params;

	switch (component) {
		case "button":
			return await renderButton(await getButton(id));
		case "personalExperience":
		case "professionalExperience":
			return await renderExperience(await getExperience(id, component));
		case "hero":
			return await renderHero(await getHero(id));
		case "resume":
			return await renderResume(await getResume(id));
		default:
			notFound();
	}
}
