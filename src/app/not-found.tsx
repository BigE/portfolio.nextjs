import PageLayout from "./[...slug]/layout";
import Hero from "@/components/client/hero";
import Button from "@/components/client/button";

import hero_styles from "@/styles/hero.module.scss";
import Icon from "@/components/client/icon";

export default function NotFound() {
	const button = <Button label="Return Home" icon="FaHouse" external="/" className={hero_styles.button}></Button>;

	return (
		<PageLayout params={{ slug: "" }}>
			<Hero title="404 Not Found" button={button} icon="FaTriangleExclamation">
				<p>I blame the gremlins <Icon icon="FaFaceDizzy" /></p>
			</Hero>
		</PageLayout>
	);
}
