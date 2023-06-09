import { GetStaticProps } from "next";

import { Icon } from "@/components";
import { getPage, getPages, getSiteSettings, getSocialIcons } from "@/utils/contentful";

export const getStaticProps: GetStaticProps = async () => {
	const home = await getPage('home');
	const pages = await getPages();
	const siteSettings = await getSiteSettings();
	const socialIcons = await getSocialIcons();

	return { props: { home, pages, siteSettings, socialIcons } }
}

export default function FourOhFour() {
	return <>
		<h1>404 - Page Not Found</h1>
		<p>I blame the gremlins <Icon icon="FaRegSurprise" /></p>
	</>
}
