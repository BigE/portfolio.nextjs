import React, { useRef } from "react";
import Image from "next/image";

import styles from "@/styles/hero.module.scss";
import { renderButton } from "./button";
import { IHero } from "@/@types/generated/contentful";
import * as navigation from "@/utils/navigation";

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

export function renderHero( hero: IHero, callback: CallableFunction | undefined, menu_items: navigation.MenuItems, className?: string ) {
	function handleClick(event: React.MouseEvent) {
		if (callback)
			navigation.handleClick(event, menu_items, callback);
	}

	const button = hero.fields.button? renderButton(hero.fields.button, styles.button, styles.icon, handleClick) : undefined;

	return <Hero key={hero.sys.id} {...hero.fields} background={hero.fields.background?.fields.file.url} button={button} className={className} backgroundProps={hero.fields.background?.fields.file.details.image} />;
}
