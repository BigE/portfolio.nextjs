import Image from "next/image";
import Link from "next/link";

import logo from "@/assets/logo.png";
import Icon from "@/components/client/icon";
import styles from "@/styles/layout.module.scss";
import toggleStyles from "@/styles/navigation/toggle.module.scss";
import { getPage, getPages, getSiteSettings, getSocialIcons } from "@/utils/contentful";
import Navigation from "@/components/client/navigation/navigation";
import SocialNavigation from "@/components/client/navigation/social";
import MenuToggle from "@/components/client/navigation/toggle";
import BackToTop from "@/components/client/navigation/backToTop";

export default async function PageLayout({
	children,
	params
}: {
	children: React.ReactNode,
	params: {slug: string}
}) {
	const items = {home: await getPage("home"), pages: (await getPages()).filter(page => page.fields.slug !== "home")};
	const socialIcons = await getSocialIcons();
	const siteSettings = await getSiteSettings();

	return <>
		<header className={`${toggleStyles.header} ${styles.header}`}>
			<Link href="/" className={`pure-menu-heading ${styles.logo}`}>
				<span className={`${styles.image} ${styles.avatar}`}><Image src={logo} alt="me" /></span>
				<h1>{siteSettings["header.headline"] || "Portfolio"}</h1>
				{siteSettings["header.sub_headline"] && <p>{siteSettings["header.sub_headline"]}</p>}
			</Link>
			<Navigation items={items} slug={params.slug} />
			<SocialNavigation items={socialIcons} />
		</header>
		<main className={`${toggleStyles.content} ${styles.content}`}>{children}</main>
		<footer className={`${toggleStyles.footer} ${styles.footer}`}>
			<div>
				<div><Icon icon="FaRegCopyright" /> Eric Gach All Rights Reserved.</div>
				<Icon className={styles.icon} icon="FaEllipsisV" />
				<div>
					<a href="https://github.com/BigE/portfolio" target="_blank">Portfolio<Icon icon="FaExternalLinkAlt" link /></a>	is built using the <a href="https://nextjs.org" target="_blank">NextJS<Icon icon="FaExternalLinkAlt" link /></a> framework and <a href="https://contentful.com" target="_blank">Contentful CMS<Icon icon="FaExternalLinkAlt" link /></a>
				</div>
			</div>
		</footer>
		<MenuToggle />
		<BackToTop />
	</>;
}
