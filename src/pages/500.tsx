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

export default function FiveHundred() {
	return <>
		<h1><Icon icon="FaRobot" />500 - Server Error</h1>
	</>
}
