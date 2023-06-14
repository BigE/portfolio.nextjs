import Image from "next/image";

import { TypeHero } from "@/@types/contentful/TypeHero";
import * as navigation from "@/utils/navigation";

import styles from "@/styles/hero.module.scss";
import { renderButton } from "./button";

export interface HeroProps {
	background?: string | undefined;
	backgroundProps?: {height: number, width: number}
	button?: React.ReactNode;
	description?: string;
	title: string;
};

export default function Hero( {
	background,
	backgroundProps,
	button,
	description,
	title,
	...props
}: HeroProps & JSX.IntrinsicElements["section"] ) {
	props.className = [styles.hero, props.className].join(' ').trim();
	background = background?.startsWith("//")? `https:${background}` : background;

	return <section {...props}>
		<div>
			<h1>{title}</h1>
			{description && <p>{description}</p>}
			{button}
		</div>
		{background && <Image className={styles.background} src={background} alt={background} fill priority />}
	</section>;
}

export function renderHero( hero: TypeHero<"WITHOUT_UNRESOLVABLE_LINKS", string>, menu_items: navigation.MenuItems, className?: string ) {
	function handleClick(event: React.MouseEvent) {
		navigation.handleClick(event, menu_items);
	}

	return <Hero
		key={hero.sys.id}
		title={hero.fields.title}
		background={hero.fields.background?.fields.file?.url}
		button={hero.fields.button && renderButton(hero.fields.button, styles.button, styles.icon, handleClick)}
		className={className}
		backgroundProps={hero.fields.background?.fields.file?.details.image}
	/>;
}
