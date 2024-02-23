import Icon from "@/components/client/icon";
import Link from "next/link";
import PageLayout from "./[...slug]/layout";

export default function NotFound() {
	return (
		<PageLayout params={{ slug: "" }}>
			<section id="not-found" style={{
				margin: "1em",
				textAlign: "center",
			}}>
				<h2>404 - Page Not Found</h2>
				<p>I blame the gremlins <Icon icon="FaRegSurprise" /></p>
				<Link href="/">Return Home</Link>
			</section>
		</PageLayout>
	);
}
