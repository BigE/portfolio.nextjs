"use server";

import { TypePanel } from "@/@types/contentful";
import styles from "@/styles/panel.module.scss";
import Panel from "./client/panel";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Button from "./client/button";
import { options } from "./client/richtext";
import renderButton from "./button";

export default async function renderPanel(panel: TypePanel<"WITHOUT_UNRESOLVABLE_LINKS", string>, dark: boolean = false) {
	const buttons: React.ReactNode[] = [];

	if (panel.fields.buttons) {
		for (const button of panel.fields.buttons) {
			if (!button) continue;

			buttons.push(await renderButton(button, styles.button, styles.icon));
		}
	}

	return <Panel key={panel.sys.id} buttons={buttons} dark={dark} headline={panel.fields.headline} icon={panel.fields.fontAwesomeIcon?.fields.name} slug={panel.fields.slug}>
		{documentToReactComponents(panel.fields.richText, options)}
	</Panel>;
}
