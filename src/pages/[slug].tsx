import { Entry } from "contentful/dist/types/types/entry";
import { useContext } from "react";
import { GetStaticProps } from "next";

import { TypeSocialIcons } from "@/@types/contentful/TypeSocialIcons";
import { TypePageSectionSkeleton, isTypePageSection } from "@/@types/contentful/TypePageSection";
import { TypeHeroSkeleton, isTypeHero } from "@/@types/contentful/TypeHero";
import { TypeResumeSkeleton, isTypeResume } from "@/@types/contentful/TypeResume";
import { TypePage } from "@/@types/contentful/TypePage";

import { getPage, getPages, getSiteSettings, getSlugs, getSocialIcons } from "@/utils/contentful";
import { MenuItems } from "@/utils/navigation";

import { renderHero } from "@/components/hero";
import { renderPageSection } from "@/components/pageSection";
import { renderResume } from "@/components/resume";
import { NavigationContext } from "@/context/navigation";

export async function getStaticPaths() {
	const slugs = await getSlugs();
	const paths = slugs.map((slug) => ({
		params: { slug: slug },
	}));

	return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ( context ) => {
	const { params } = context;
	const slug = params?.slug || "home"; // assume home since we're top level

	const home = await getPage('home');
	const page = await getPage(String(slug));
	const pages = await getPages();
	const siteSettings = await getSiteSettings();
	const socialIcons = await getSocialIcons();

	return { props: { home, page, pages, siteSettings, socialIcons } }
}

export type PageProps = {
	home: TypePage<"WITHOUT_UNRESOLVABLE_LINKS", string>;
	page: TypePage<"WITHOUT_UNRESOLVABLE_LINKS", string>;
	pages: TypePage<"WITHOUT_UNRESOLVABLE_LINKS", string>[];
	siteSettings: {[key: string]: string};
	socialIcons: TypeSocialIcons<undefined, string>;
};

export default function Page({ page }: PageProps) {
	const menuItems = useContext(NavigationContext);

	var sectionCounter = {
		counter: 0,
	};

	return page.fields.content.map(section => renderSection(section, sectionCounter, menuItems));
}

export function renderSection(
	section: Entry<TypeHeroSkeleton | TypePageSectionSkeleton | TypeResumeSkeleton, "WITHOUT_UNRESOLVABLE_LINKS", string> | undefined,
	sectionCounter: {[key: string]: number},
	menu_items: MenuItems,
) {
	if (!section) return;

	if (isTypeHero(section))
		return renderHero(section, menu_items);
	else if (isTypePageSection(section))
		return renderPageSection(section, (sectionCounter.counter++ % 2 !== 0), 'menu-block');
	else if (isTypeResume(section))
		return renderResume(section);

	return <section key={section.sys.id} id={section.sys.id}></section>
}
