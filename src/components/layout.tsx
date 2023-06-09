import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";

import logo from "@/assets/logo.png";
import styles from "@/styles/layout.module.scss";
import toggleStyles from "@/styles/navigation/toggle.module.scss";
import { Navigation, NavigationProps, SocialNavigation } from "./navigation";
import Icon from "./icon";
import MenuToggle from "./navigation/toggle";
import { IPage, IPageSection } from "@/@types/generated/contentful";
import NavigationProvider from "@/context/navigation";

type PageProps = {
	home: IPage;
	page?: IPage | undefined;
	pages: IPage[];
	siteSettings: {[key: string]: string};
	socialIcons: any;
};

type LayoutProps = {
	props: PageProps;
	children?: React.ReactNode;
};

export default function Layout({ props, children }: LayoutProps) {
	const { home, page, pages, siteSettings, socialIcons } = props;
	const externalPages = pages?.filter(page => page.fields.slug !== "home");
	const navItems = {home: home, pages: externalPages};
	const siteTitle = (siteSettings["site.title"] || "My Portfolio") + (page?.fields.title? ` | ${page.fields.title}` : '');

	useEffect(() => {
		function handleScroll() {
			if ((document.scrollingElement || document.documentElement).scrollTop > 200) {
				document.getElementById('backToTop')?.classList.add(styles.visible);
			} else {
				document.getElementById('backToTop')?.classList.remove(styles.visible);
			}
		}

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	});

	function handleClick(event: React.MouseEvent) {
		event.preventDefault();

		window.history.pushState({}, '', window.location.href.replace(/(#.*)?$/, ''));
		window.scrollTo({
			behavior: "smooth",
			top: 0,
		});
	}

	return <NavigationProvider>
		<Head>
			<title>{siteTitle}</title>
		</Head>
		<header className={`${toggleStyles.header} ${styles.header}`}>
			<Link href="/" className={`pure-menu-heading ${styles.logo}`}>
				<span className={`${styles.image} ${styles.avatar}`}><Image src={logo} alt="me" /></span>
				<h1>{siteSettings["header.headline"] || "Portfolio"}</h1>
				{siteSettings["header.sub_headline"] && <p>{siteSettings["header.sub_headline"]}</p>}
			</Link>
			<Navigation role="main" items={navItems} />
			{socialIcons && <SocialNavigation items={socialIcons} />}
		</header>
		<main className={`${toggleStyles.content} ${styles.content}`}>{children}</main>
		<footer className={`${toggleStyles.footer} ${styles.footer}`}>
			<div>
				<section><Icon icon="FaRegCopyright" /> Eric Gach All Rights Reserved.</section>
				<Icon className={styles.icon} icon="FaEllipsisV" />
				<section>
					<a href="https://github.com/BigE/portfolio" target="_blank">Portfolio<Icon icon="FaExternalLinkAlt" link /></a>	is built using the <a href="https://nextjs.org" target="_blank">NextJS<Icon icon="FaExternalLinkAlt" link /></a> framework and <a href="https://contentful.com" target="_blank">Contentful CMS<Icon icon="FaExternalLinkAlt" link /></a>
				</section>
			</div>
		</footer>
		<MenuToggle />
		<a id="backToTop" className={styles.backToTop} href="#top" onClick={handleClick}><Icon className={toggleStyles.toggle} icon="FaArrowAltCircleUp" /></a>
	</NavigationProvider>
}
