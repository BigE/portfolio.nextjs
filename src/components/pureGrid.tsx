"use server";

import {
	TypePureGrid,
	isTypePureGridPanel,
	isTypePureGridRichText,
} from "@/@types/contentful";
import { PanelExtraProps } from "./client/panel";
import PureGrid from "./client/pureGrid";
import RichText from "./client/richtext";
import renderPanel from "./panel";

export type RenderPureGridProps = {
	pureGrid: TypePureGrid<"WITHOUT_UNRESOLVABLE_LINKS", string>;
} & PanelExtraProps;

export default async function renderPureGrid({
	dark,
	headlineClassName,
	iconClassName,
	pureGrid,
}: RenderPureGridProps) {
	const children: React.ReactNode[] = [];

	for (const content of pureGrid.fields.content) {
		let child: React.ReactNode;

		if (!content) continue;
		else if (isTypePureGridPanel(content) && content.fields.panel)
			child = await renderPanel({
				dark: dark,
				headlineClassName: headlineClassName,
				iconClassName: iconClassName,
				panel: content.fields.panel,
			});
		else if (isTypePureGridRichText(content) && content.fields.richText)
			child = (
				<RichText document={content.fields.richText.fields.richText} />
			);

		children.push(
			<div
				key={content.sys.id}
				className={content.fields.className?.fields.className}
			>
				{child}
			</div>
		);
	}

	return (
		<PureGrid key={pureGrid.sys.id} id={pureGrid.sys.id}>
			{children}
		</PureGrid>
	);
}
