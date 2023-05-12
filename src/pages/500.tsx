import { GetStaticProps } from "next";
import { Icon } from "@/components";
import { getPages, getSiteSettings, getSocialIcons } from "@/utils/contentful";

export const getStaticProps: GetStaticProps = async () => {
	const pages = await getPages();
	const siteSettings = await getSiteSettings();
	const socialIcons = await getSocialIcons();

	return { props: { pages, siteSettings, socialIcons } }
}

export default function FiveHundred() {
	return <>
		<h1><Icon icon="FaRobot" />500 - Server Error</h1>
	</>
}
