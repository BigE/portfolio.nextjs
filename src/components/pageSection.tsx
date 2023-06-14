import { Entry } from 'contentful/dist/types/types/entry';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import { TypePageSection } from '@/@types/contentful/TypePageSection';
import { TypeFormSkeleton, isTypeForm } from '@/@types/contentful/TypeForm';
import { TypePanelSkeleton, isTypePanel } from '@/@types/contentful/TypePanel';
import { TypePureGridSkeleton, isTypePureGrid } from '@/@types/contentful/TypePureGrid';
import { TypeRichTextSkeleton, isTypeRichText } from '@/@types/contentful/TypeRichText';

import styles from "@/styles/pageSection.module.scss";
import { renderForm } from "./form";
import Icon from "./icon";
import { renderPanel } from "./panel";
import { renderPureGrid } from "./pureGrid";
import { RichTextOptions } from "./richText";

type PageSectionProps = {
	dark?: boolean;
	headline: string;
	icon?: string;
	slug: string;
}

export default function PageSection({
	dark,
	headline,
	icon,
	slug,
	children,
	className,
	...props
}: PageSectionProps & JSX.IntrinsicElements["section"] ) {
	className = [styles.pageSection, dark? styles.dark : undefined, className].join(' ').trim();

	return <section id={slug} className={className} {...props}>
		<header>
			<h2>
				<Icon className={styles.icon} icon={icon} />
				{headline}
			</h2>
		</header>
		{children}
	</section>
}

export function renderPageSection( section: TypePageSection<"WITHOUT_UNRESOLVABLE_LINKS", string>, dark: boolean = false, className?: string | undefined ) {
	return <PageSection
		key={section.sys.id}
		className={className}
		dark={dark}
		headline={section.fields.headline}
		icon={section.fields.icon?.fields.name}
		slug={section.fields.slug}
	>
		{section.fields.content.map(item => renderPageSectionContent(item, dark, className?.replace('menu-block', '')))}
	</PageSection>
}

export function renderPageSectionContent( item: Entry<TypeFormSkeleton | TypePanelSkeleton | TypePureGridSkeleton | TypeRichTextSkeleton, "WITHOUT_UNRESOLVABLE_LINKS", string> | undefined, dark: boolean = false, className?: string | undefined ) {
	if (!item) return;

	if (isTypeForm(item))
		return renderForm(item, className);
	else if (isTypePanel(item))
		return renderPanel(item, dark, className);
	else if (isTypePureGrid(item))
		return renderPureGrid(item, className);
	else if (isTypeRichText(item)) {
		const document = item.fields.richText;
		return <span key={item.sys.id} className={className}>{documentToReactComponents(document, RichTextOptions)}</span>;
	}
	
	return <section key={item.sys.id} id={item.sys.id}></section>;
}
