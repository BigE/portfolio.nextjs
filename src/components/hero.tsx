import { Asset } from "contentful";

import styles from "@/styles/hero.module.scss";
import { renderButton } from "./button";
import { IHero } from "@/@types/generated/contentful";
import React from "react";
import Image from "next/image";

export interface HeroProps {
	background?: string | undefined;
	backgroundProps?: {height: number, width: number}
	button?: React.ReactNode;
	className?: string;
	description?: string;
	title: string;
};

export default function Hero( props: HeroProps ) {
	const className = [styles.hero, props.className].join(' ').trim();
	const background = props.background?.startsWith("//")? `https:${props.background}` : props.background;

	return(
		<section className={className}>
			<div>
				<h1>{props.title}</h1>
				{props.description && <p>{props.description}</p>}
				{props.button}
			</div>
			{background && <Image className={styles.background} src={background} alt={background} fill priority />}
		</section>
	);
}

export function renderHero( hero: IHero, className?: string | undefined ) {
	const button = hero.fields.button? renderButton(hero.fields.button) : undefined;

	return <Hero key={hero.sys.id} {...hero.fields} background={hero.fields.background?.fields.file.url} button={button} className={className} backgroundProps={hero.fields.background?.fields.file.details.image} />;
}
