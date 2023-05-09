import { Asset } from "contentful";

import styles from "@/styles/hero.module.scss";
import { renderButton } from "./button";
import { IHero } from "@/@types/generated/contentful";
import React from "react";

export interface HeroProps {
	background?: string | undefined;
	button?: React.ReactNode;
	className?: string;
	description?: string;
	title: string;
};

export default function Hero( props: HeroProps ) {
	const className = [styles.hero, props.className].join(' ').trim();

	return(
		<section className={className}>
			<div>
				<h1>{props.title}</h1>
				{props.description && <p>{props.description}</p>}
				{props.button}
			</div>
			{props.background && <div className={styles.backgroundImage} style={{
				backgroundImage: `url(${props.background})`,
			}}></div>}
		</section>
	);
}

export function renderHero( hero: IHero, className?: string | undefined ) {
	const button = hero.fields.button? renderButton(hero.fields.button) : undefined;

	return <Hero key={hero.sys.id} {...hero.fields} background={hero.fields.background?.fields.file.url} button={button} className={className} />;
}
