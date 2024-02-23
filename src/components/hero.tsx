"use server";

import { TypeHero } from "@/@types/contentful";
import styles from "@/styles/hero.module.scss";
import renderButton from "./button";
import Hero from "./client/hero";

export default async function renderHero(hero: TypeHero<"WITHOUT_UNRESOLVABLE_LINKS", string>, className?: string) {
	const button = hero.fields.button && await renderButton(hero.fields.button, styles.button, styles.icon);

	return <Hero
		key={hero.sys.id}
		{...hero.fields}
		background={hero.fields.background?.fields.file?.url}
		button={button}
		className={className}
		backgroundProps={hero.fields.background?.fields.file?.details.image}
	/>;
}
