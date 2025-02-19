"use client";

import Image from "next/image";

import styles from "@/styles/hero.module.scss";
import Icon from "./icon";

export type HeroBackgroundProps = {
	alt: string;
	height?: number;
	width?: number;
	url: string;
};

export type HeroProps = {
	background?: HeroBackgroundProps;
	button?: React.ReactNode;
	description?: string;
	icon?: string;
	title: string;
};

export default function Hero( { background, button, description, icon, title, ...props}: HeroProps & JSX.IntrinsicElements["section"] ) {
	if (background && background.url.startsWith("//"))
		background.url = `https:${background.url}`;

	props.className = [styles.hero, props.className].join(' ').trim();

	return <section {...props}>
		<div>
			<h2 className={styles.headline}>{icon && <Icon icon={icon} /> } {title}</h2>
			{description && <p>{description}</p>}
			{button}
		</div>
		{background && <Image className={styles.background} src={background.url} alt={background.alt} fill priority />}
	</section>;
}
