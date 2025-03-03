"use server";

import { TypeHero } from "@/@types/contentful";
import styles from "@/styles/hero.module.scss";
import renderButton from "./button";
import Hero, { HeroBackgroundProps } from "./client/hero";

export default async function renderHero(
	hero: TypeHero<"WITHOUT_UNRESOLVABLE_LINKS", string>,
	className?: string
) {
	const button =
		hero.fields.button &&
		(await renderButton(hero.fields.button, styles.button, styles.icon));
	let background: HeroBackgroundProps | undefined = undefined;

	if (hero.fields.background && hero.fields.background.fields.file)
		background = {
			alt:
				hero.fields.background.fields.title ||
				"Portfolio background image",
			height: hero.fields.background.fields.file.details.image?.height,
			width: hero.fields.background.fields.file.details.image?.width,
			url: hero.fields.background.fields.file.url,
		};

	return (
		<Hero
			key={hero.sys.id}
			{...hero.fields}
			background={background}
			button={button}
			className={className}
		/>
	);
}
