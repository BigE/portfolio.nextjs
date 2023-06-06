import type { AppProps } from "next/app";
import { Open_Sans, Quicksand } from "next/font/google";

import "purecss/build/pure.css";
import "@/styles/globals.scss";
import Layout from "@/components/layout";
import NavigationProvider from "@/context/navigation";

const quicksand = Quicksand({ subsets: ['latin'] });
const open_sans = Open_Sans({ subsets: ['latin'] });

export default function App({ Component, pageProps }: AppProps) {

	return <NavigationProvider>
		<Layout props={pageProps}>
			<style jsx global>{`
				html {
					font-family: ${open_sans.style.fontFamily};
				}

				h1,h2,h3,h4,h5,h6 {
					font-family: ${quicksand.style.fontFamily};
				}
			`}</style>
			<Component {...pageProps} />
		</Layout>
	</NavigationProvider>
}
