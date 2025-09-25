"use server";

import { TypePanel } from "@/@types/contentful";
import styles from "@BigE/portfolio.css/scss/components/panel.module.scss";
import Panel, { PanelExtraProps } from "./client/panel";
import RichText from "./client/richtext";
import renderButton from "./button";

export type RenderPanelProps = {
	panel: TypePanel<"WITHOUT_UNRESOLVABLE_LINKS", string>;
} & PanelExtraProps;

export default async function renderPanel({
	dark = false,
	headlineClassName,
	iconClassName,
	panel,
}: RenderPanelProps) {
	const buttons: React.ReactNode[] = [];
	const panelClassName = [];

	if (panel.fields.buttons) {
		for (const button of panel.fields.buttons) {
			if (!button) continue;

			buttons.push(
				await renderButton({
					button: button,
					className: styles.button,
					iconClassName: styles.icon,
				})
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
			headlineClassName={headlineClassName}
			icon={panel.fields.fontAwesomeIcon?.fields.name}
			iconClassName={iconClassName}
			slug={panel.fields.slug}
		>
			<RichText document={panel.fields.richText} />
		</Panel>
	);
}
