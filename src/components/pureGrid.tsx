"use server";

import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

import { TypePureGrid, isTypePureGridPanel, isTypePureGridRichText } from "@/@types/contentful";
import panelStyles from "@/styles/panel.module.scss";
import Button from "./client/button";
import PureGrid from "./client/pureGrid";
import Panel from "./client/panel";
import { options } from "./client/richtext";
import renderPanel from "./panel";

export default async function renderPureGrid(pureGrid: TypePureGrid<"WITHOUT_UNRESOLVABLE_LINKS", string>, dark: boolean = false) {
	let children: React.ReactNode[] = [];

	for (const content of pureGrid.fields.content) {
		let child: React.ReactNode;

		if (!content) continue;
		else if (isTypePureGridPanel(content) && content.fields.panel)
			child = await renderPanel(content.fields.panel, dark);
		else if (isTypePureGridRichText(content) && content.fields.richText)
			child = documentToReactComponents(content.fields.richText.fields.richText, options);

		children.push(<section key={content.sys.id} className={content.fields.className?.fields.className}>{child}</section>);
	}

	return <PureGrid key={pureGrid.sys.id} id={pureGrid.sys.id}>{children}</PureGrid>;
}
