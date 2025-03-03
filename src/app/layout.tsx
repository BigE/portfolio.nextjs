import { Metadata } from "next";
import { Open_Sans } from "next/font/google";

import "purecss/build/pure.css";
import "purecss/build/grids-responsive.css";

import "@/styles/global.css";
import styles from "@/styles/layout.module.scss";
import { getSiteSettings } from "@/utils/contentful";
import NavigationProvider from "@/context/navigation";

const open_sans = Open_Sans({ subsets: ["latin"] });

export async function generateMetadata(): Promise<Metadata> {
	const siteSettings = await getSiteSettings(),
		title = siteSettings["site.title"] ?? "My Portfolio";

	return {
		title: {
			default: title,
			template: `%s | ${title}`,
		},
		description: siteSettings["site.description"],
		metadataBase: new URL("https://ericgach.me"),
		alternates: {
			canonical: "/",
		},
	};
}

export default async function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className={open_sans.className}>
			<body className={styles.body}>
				<NavigationProvider>{children}</NavigationProvider>
			</body>
		</html>
	);
}
