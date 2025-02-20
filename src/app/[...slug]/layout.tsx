import Image from "next/image";
import Link from "next/link";

import logo from "@/assets/logo.png";
import Icon, { ExternalLinkIcon } from "@/components/client/icon";
import print from "@/styles/print.module.scss";
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
		<header className={`${toggleStyles.header} ${styles.header} ${print.noPrint}`}>
			<Link href="/" className={`pure-menu-heading ${styles.logo}`}>
				<span className={`${styles.image} ${styles.avatar}`}><Image src={logo} alt="me" /></span>
				<h1>{siteSettings["header.headline"] || "Portfolio"}</h1>
				{siteSettings["header.sub_headline"] && <p>{siteSettings["header.sub_headline"]}</p>}
			</Link>
			<Navigation items={items} slug={params.slug} />
			<SocialNavigation items={socialIcons} />
		</header>
		<main className={`${toggleStyles.content} ${styles.content}`}>{children}</main>
		<footer className={`${toggleStyles.footer} ${styles.footer} ${print.noPrint}`}>
			<div>
				<span><Icon icon="FaRegCopyright" /> Eric Gach All Rights Reserved.</span>
				<Icon className={styles.icon} icon="FaEllipsisVertical" />
				<span>
					<a href="https://github.com/BigE/portfolio" target="_blank">Portfolio<ExternalLinkIcon link /></a>	is built using the <a href="https://nextjs.org" target="_blank">NextJS<ExternalLinkIcon link /></a> framework and <a href="https://contentful.com" target="_blank">Contentful CMS<ExternalLinkIcon link /></a>
				</span>
			</div>
		</footer>
		<MenuToggle className={print.noPrint} />
		<BackToTop className={print.noPrint} />
	</>;
}
