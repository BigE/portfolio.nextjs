"use server";

import { TypePanel } from "@/@types/contentful";
import styles from "@BigE/portfolio.css/scss/components/panel.module.scss";
import Panel from "./client/panel";
import RichText from "./client/richtext";
import renderButton from "./button";

export default async function renderPanel(
	panel: TypePanel<"WITHOUT_UNRESOLVABLE_LINKS", string>,
	dark: boolean = false
) {
	const buttons: React.ReactNode[] = [];
	const panelClassName = [];

	if (panel.fields.buttons) {
		for (const button of panel.fields.buttons) {
			if (!button) continue;

			buttons.push(
				await renderButton(button, styles.button, styles.icon)
			);
		}
	}

	if (panel.fields.panelColor === "Accent")
		panelClassName.push(styles.accent);
	else if (panel.fields.panelColor === "Brand")
		panelClassName.push(styles.brand);

	return (
		<Panel
			key={panel.sys.id}
			className={panelClassName.join(" ").trim()}
			buttonAlignment={panel.fields.buttonAlignment}
			buttons={buttons}
			dark={dark}
			headline={panel.fields.headline}
			icon={panel.fields.fontAwesomeIcon?.fields.name}
			slug={panel.fields.slug}
		>
			<RichText document={panel.fields.richText} />
		</Panel>
	);
}
