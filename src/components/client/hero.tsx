"use client";

import Image from "next/image";

import styles from "@/styles/hero.module.scss";

export type HeroProps = {
	background?: string;
	backgroundProps?: {height: number, width: number};
	button?: React.ReactNode;
	description?: string;
	title: string;
};

export default function Hero( {background, backgroundProps, button, description, title, ...props}: HeroProps & JSX.IntrinsicElements["section"] ) {
	background = background?.startsWith("//")? `https:${background}` : background;
	props.className = [styles.hero, props.className].join(' ').trim();

	return <section {...props}>
		<div>
			<h2 className={styles.headline}>{title}</h2>
			{description && <p>{description}</p>}
			{button}
		</div>
		{background && <Image className={styles.background} src={background} alt={background} fill priority />}
	</section>;
}
