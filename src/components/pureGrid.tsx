import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import React from "react";

import Panel, { renderPanel } from "./panel";
import { options } from "./richText";
import { IPureGrid, IPureGridPanel, IPureGridRichText } from "@/@types/generated/contentful";

type Props = {
	className?: string;
	children?: React.ReactNode;
};

export default function PureGrid( props: Props ) {
	const className = ["pure-g", props.className].join(' ').trim();

	return <div className={className}>{props.children}</div>
}

export function renderPureGrid( item: IPureGrid, className?: string | undefined ) {
	return <PureGrid key={item.sys.id} {...item.fields} className={className}>
		{item.fields.content.map(section => renderPureGridSection(section))}
	</PureGrid>;
}

export function renderPureGridSection( section: IPureGridPanel | IPureGridRichText, className?: string | undefined ) {
	switch (section.sys.contentType.sys.id) {
		case "pureGridPanel":
			return renderPureGridPanel(section as IPureGridPanel, className);
		case "pureGridRichText":
			return renderPureGridRichText(section as IPureGridRichText, className);
		default:
			return <div key={section.sys.id} id={section.sys.id}></div>;
	}
}

export function renderPureGridPanel( section: IPureGridPanel, className?: string | undefined ) {
	return <div key={section.sys.id} className={[section.fields.className.fields.className, className].join(' ').trim()}>
		{renderPanel(section.fields.panel, undefined, className)}
	</div>;
}

export function renderPureGridRichText( section: IPureGridRichText, className?: string | undefined ) {
	return <div key={section.sys.id} className={[section.fields.className.fields.className, className].join(' ').trim()}>
		{documentToReactComponents(section.fields.richText.fields.richText, options)}
	</div>;
}
