import { Entry } from "contentful";
import { GetStaticProps } from "next";

import { renderHero } from "@/components/hero";
import { renderPageSection } from "@/components/pageSection";
import { getPage, getPages, getSiteSettings, getSlugs, getSocialIcons } from "@/utils/contentful";
import { IHero, IPage, IPageSection } from "@/@types/generated/contentful";
import { MenuItems } from "@/utils/navigation";
import { useContext } from "react";
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
	const page = await getPage(String(slug));
	const pages = await getPages();
	const siteSettings = await getSiteSettings();
	const socialIcons = await getSocialIcons();

	return { props: { page, pages, siteSettings, socialIcons } }
}

type PageProps = {
	page: IPage;
	pages: Entry<IPage>[];
	siteSettings: {[key: string]: string};
	socialIcons: any;
};

export default function Page({ page }: PageProps) {
	const menuItems = useContext(NavigationContext);
	var sectionCounter = {
		counter: 0,
	};

	return page.fields.content.map(section => renderSection(section, sectionCounter, menuItems));
}

export function renderSection( section:  IHero | IPageSection, sectionCounter: {[key: string]: number}, menu_items: MenuItems ) {
	if (section.sys.contentType.sys.id === 'hero')
		return renderHero(section as IHero, menu_items);
	else if (section.sys.contentType.sys.id === 'pageSection') {
		return renderPageSection(section as  IPageSection, (sectionCounter.counter++ % 2 !== 0), 'menu-block');
	}

	return <section key={section.sys.id} id={section.sys.id}></section>
}
