"use server";

import { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";

import { getPage } from "@/utils/contentful";
import { isTypeHero, isTypePageSection, isTypeResume } from "@/@types/contentful";
import renderHero from "@/components/hero";
import renderPageSection from "@/components/pageSection";
import renderResume from "@/components/resume";

type SlugPageType = {
	params: {
		slug: string,
	},
};

export async function generateMetadata({ params }: SlugPageType, parent: ResolvingMetadata): Promise<Metadata> {
	const page = await getPage(params.slug);

	if (!page) notFound();

	return {
		title: page.fields.title,
	};
}

export default async function SlugPage({ params }: SlugPageType) {
	const page = await getPage(params.slug);

	if (!page) notFound();

	let children: React.ReactNode[] = [];

	for (let i = 0; i < page.fields.content.length; i++) {
		const section = page.fields.content[i];

		if (!section) continue;
		else if (isTypeHero(section))
			children.push(await renderHero(section));
		else if (isTypePageSection(section))
			children.push(await renderPageSection(section, i % 2 === 0));
		else if (isTypeResume(section))
			children.push(await renderResume(section));
	}

	return <>{children}</>;
}
