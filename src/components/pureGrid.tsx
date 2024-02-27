"use server";

import { TypePureGrid, isTypePureGridPanel, isTypePureGridRichText } from "@/@types/contentful";
import PureGrid from "./client/pureGrid";
import RichText from "./client/richtext";
import renderPanel from "./panel";

export default async function renderPureGrid(pureGrid: TypePureGrid<"WITHOUT_UNRESOLVABLE_LINKS", string>, dark: boolean = false) {
	let children: React.ReactNode[] = [];

	for (const content of pureGrid.fields.content) {
		let child: React.ReactNode;

		if (!content) continue;
		else if (isTypePureGridPanel(content) && content.fields.panel)
			child = await renderPanel(content.fields.panel, dark);
		else if (isTypePureGridRichText(content) && content.fields.richText)
			child = <RichText document={content.fields.richText.fields.richText} />;

		children.push(<div key={content.sys.id} className={content.fields.className?.fields.className}>{child}</div>);
	}

	return <PureGrid key={pureGrid.sys.id} id={pureGrid.sys.id}>{children}</PureGrid>;
}
