import { Entry } from "contentful/dist/types/types/entry";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

import { TypePureGrid } from "@/@types/contentful/TypePureGrid";
import { TypePureGridPanel, TypePureGridPanelSkeleton, isTypePureGridPanel } from "@/@types/contentful/TypePureGridPanel";
import { TypePureGridRichText, TypePureGridRichTextSkeleton, isTypePureGridRichText } from "@/@types/contentful/TypePureGridRichText";

import { renderPanel } from "./panel";
import { options } from "./richText";

type Props = {
	className?: string;
	children?: React.ReactNode;
};

export default function PureGrid( props: Props ) {
	const className = ["pure-g", props.className].join(' ').trim();

	return <div className={className}>{props.children}</div>
}

export function renderPureGrid( item: TypePureGrid<"WITHOUT_UNRESOLVABLE_LINKS", string>, className?: string | undefined ) {
	return <PureGrid key={item.sys.id} {...item.fields} className={className}>
		{item.fields.content.map(section => renderPureGridSection(section))}
	</PureGrid>;
}

export function renderPureGridSection( section: Entry<TypePureGridPanelSkeleton | TypePureGridRichTextSkeleton, "WITHOUT_UNRESOLVABLE_LINKS", string> | undefined, className?: string | undefined ) {
	if (!section) return;

	if (isTypePureGridPanel(section))
		return renderPureGridPanel(section, className);
	else if (isTypePureGridRichText(section))
		return renderPureGridRichText(section, className);

	return <div key={section.sys.id} id={section.sys.id}></div>;
}

export function renderPureGridPanel( section: TypePureGridPanel<"WITHOUT_UNRESOLVABLE_LINKS", string>, className?: string | undefined ) {
	if (!section.fields.panel) return;

	return <div key={section.sys.id} className={[section.fields.className?.fields.className, className].join(' ').trim()}>
		{renderPanel(section.fields.panel, undefined, className)}
	</div>;
}

export function renderPureGridRichText( section: TypePureGridRichText<"WITHOUT_UNRESOLVABLE_LINKS", string>, className?: string | undefined ) {
	if (!section.fields.richText) return;

	return <div key={section.sys.id} className={[section.fields.className?.fields.className, className].join(' ').trim()}>
		{documentToReactComponents(section.fields.richText.fields.richText, options)}
	</div>;
}
