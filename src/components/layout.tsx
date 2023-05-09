import { Entry } from "contentful";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import logo from "@/assets/logo.png";
import styles from "@/styles/layout.module.scss";
import { Navigation, SocialNavigation } from "./navigation";
import Icon from "./icon";
import { IPage, IPageSection } from "@/@types/generated/contentful";

type PageProps = {
	page: IPage;
	pages: IPage[];
	siteSettings: {[key: string]: string};
	socialIcons: any;
};

type LayoutProps = {
	props: PageProps;
	children?: React.ReactNode;
};

export default function Layout({ props, children }: LayoutProps) {
	const { page, pages, siteSettings, socialIcons } = props;
	const externalPages = pages?.filter(page => page.fields.slug !== "home");
	const navItems = {sections: page?.fields.content.filter(section => section.sys.contentType.sys.id === "pageSection"), pages: externalPages} as { sections: IPageSection[], pages: IPage[]};
	const siteTitle = (siteSettings["site.title"] || "My Portfolio") + (page.fields.title? ` | ${page.fields.title}` : '');

	return <>
		<Head>
			<title>{siteTitle}</title>
		</Head>
		<header className={styles.header}>
			<Link href="/" className={`pure-menu-heading ${styles.logo}`}>
				<span className={styles.avatar}><Image src={logo} alt="me" /></span>
				<h1>{siteSettings["header.headline"] || "Portfolio"}</h1>
				{siteSettings["header.sub_headline"] && <p>{siteSettings["header.sub_headline"]}</p>}
			</Link>
			<Navigation role="main" items={navItems} />
			{socialIcons && <SocialNavigation items={socialIcons} />}
		</header>
		<main className={styles.content}>{children}</main>
		<footer className={styles.footer}>
			<div>
				<section><Icon icon="FaRegCopyright" /> Eric Gach All Rights Reserved.</section>
				<Icon icon="FaEllipsisV" />
				<section>
					<a href="https://github.com/BigE/portfolio" target="_blank">Portfolio<Icon icon="FaExternalLinkAlt" link /></a>	is built using the <a href="https://nextjs.org" target="_blank">NextJS<Icon icon="FaExternalLinkAlt" link /></a> framework and <a href="https://contentful.com" target="_blank">Contentful CMS<Icon icon="FaExternalLinkAlt" link /></a>
				</section>
			</div>
		</footer>
	</>
}
