import Image from "next/image";
import Link from "next/link";

import logo from "@BigE/portfolio.css/images/logo.png";
import Icon, { ExternalLinkIcon } from "@/components/client/icon";
import print from "@/styles/print.module.scss";
import styles from "@BigE/portfolio.css/scss/layout.module.scss";
import {
	getPage,
	getPages,
	getSiteSettings,
	getSocialIcons,
} from "@/utils/contentful";
import PrimaryNavigation from "@/components/client/navigation/primary";
import SocialNavigation from "@/components/client/navigation/social";
import MenuToggle from "@/components/client/navigation/toggle";
import BackToTop from "@/components/client/navigation/backToTop";

type PageLayoutProps = Promise<{
	slug: string;
}>;

export default async function PageLayout({
	children,
	params,
}: {
	children: React.ReactNode;
	params: PageLayoutProps;
}) {
	const items = {
		home: await getPage("home"),
		pages: (await getPages()).filter((page) => page.fields.slug !== "home"),
	};
	const socialIcons = await getSocialIcons();
	const siteSettings = await getSiteSettings();
	const { slug } = await params;

	return (
		<>
			<header className={print.noPrint} id={styles.header}>
				<Link href="/" className={`pure-menu-heading ${styles.logo}`}>
					<span className={styles.image}>
						<Image src={logo} alt="me" className={styles.avatar} />
					</span>
					<span className={styles.title}>
						<h1 className={styles.headline}>
							{siteSettings["header.headline"] || "Portfolio"}
						</h1>
						{siteSettings["header.sub_headline"] && (
							<p className={styles["sub-headline"]}>
								{siteSettings["header.sub_headline"]}
							</p>
						)}
					</span>
				</Link>
				<PrimaryNavigation items={items} slug={slug} />
				<SocialNavigation items={socialIcons} />
			</header>
			<main id={styles.content}>{children}</main>
			<footer className={print.noPrint} id={styles.footer}>
				<div className={styles.content}>
					<span>
						<Icon icon="FaRegCopyright" /> Eric Gach All Rights
						Reserved.
					</span>
					<Icon className={styles.icon} icon="FaEllipsisVertical" />
					<span>
						<a
							href="https://github.com/BigE/portfolio"
							target="_blank"
						>
							Portfolio
							<ExternalLinkIcon link />
						</a>{" "}
						is built using the{" "}
						<a href="https://nextjs.org" target="_blank">
							NextJS
							<ExternalLinkIcon link />
						</a>{" "}
						framework and{" "}
						<a href="https://contentful.com" target="_blank">
							Contentful CMS
							<ExternalLinkIcon link />
						</a>
					</span>
				</div>
			</footer>
			<MenuToggle className={print.noPrint} />
			<BackToTop className={print.noPrint} />
		</>
	);
}
