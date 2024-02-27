"use server";

import { TypePageSection, isTypeForm, isTypePanel, isTypePureGrid, isTypeRichText } from "@/@types/contentful";
import PageSection from "./client/pageSection";
import renderForm from "./form";
import renderPanel from "./panel";
import renderPureGrid from "./pureGrid";
import RichText from "./client/richtext";

export default async function renderPageSection(section: TypePageSection<"WITHOUT_UNRESOLVABLE_LINKS", string>, dark: boolean = false) {
	let children: React.ReactNode[] = [];

	for (const content of section.fields.content) {
		if (!content) continue;
		else if (isTypeForm(content))
			children.push(await renderForm(content));
		else if (isTypePanel(content))
			children.push(await renderPanel(content, dark));
		else if (isTypePureGrid(content))
			children.push(await renderPureGrid(content, dark));
		else if (isTypeRichText(content))
			children.push(<div key={content.sys.id}><RichText document={content.fields.richText} /></div>);
		else
			children.push(<section key={content.sys.id} id={content.sys.id}></section>);
	}

	return <PageSection
		key={section.sys.id}
		id={section.fields.slug}
		className="menu-block"
		dark={dark}
		headline={section.fields.headline}
		icon={section.fields.icon?.fields.name}
	>{children}</PageSection>
}
