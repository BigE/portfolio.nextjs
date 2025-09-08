"use server";

import { TypeHero } from "@/@types/contentful";
import styles from "@BigE/portfolio.css/scss/components/hero.module.scss";
import renderButton from "./button";
import Hero, { HeroBackgroundProps } from "./client/hero";

export type RenderHeroExtraProps = {
	className?: string;
};

export type RenderHeroProps = {
	hero: TypeHero<"WITHOUT_UNRESOLVABLE_LINKS", string>;
} & RenderHeroExtraProps;

export default async function renderHero({ hero, className }: RenderHeroProps) {
	const button =
		hero.fields.button &&
		(await renderButton({
			button: hero.fields.button,
			className: styles.button,
			iconClassName: styles.icon,
		}));
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
