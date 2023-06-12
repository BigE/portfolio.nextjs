import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import styles from "@/styles/pageSection.module.scss";
import { renderForm } from "./form";
import Icon from "./icon";
import { renderPanel } from "./panel";
import { renderPureGrid } from "./pureGrid";
import { options } from "./richText";
import { IForm, IPageSection,  IPanel, IPureGrid, IRichText } from "@/@types/generated/contentful";
import React from 'react';

type PageSectionProps = {
	className?: string;
	children?: React.ReactNode | undefined;
	dark?: boolean;
	headline: string;
	icon: string;
	slug: string;
}

export default function PageSection( props: PageSectionProps ) {
	const className = [styles.pageSection, props.dark? styles.dark : undefined, props.className].join(' ').trim();

	return <section id={props.slug} className={className}>
		<header>
			<h2>
				<Icon className={styles.icon} icon={props.icon} />
				{props.headline}
			</h2>
		</header>
		{props.children}
	</section>
}

export function renderPageSection( section: IPageSection, dark: boolean = false, className?: string | undefined ) {
	return <PageSection key={section.sys.id} {...section.fields} className={className} dark={dark} icon={section.fields.icon.fields.name}>
		{section.fields.content.map(item => renderPageSectionContent(item, dark, className?.replace('menu-block', '')))}
	</PageSection>
}

export function renderPageSectionContent( item: IPanel | IForm | IPureGrid | IRichText, dark: boolean = false, className?: string | undefined ) {
	switch (item.sys.contentType.sys.id) {
		case 'form':
			return renderForm(item as IForm, className);

		case 'panel':
			return renderPanel(item as IPanel, dark, className);

		case 'pureGrid':
			return renderPureGrid(item as IPureGrid, className);

		case 'richText':
			const document = (item as IRichText).fields.richText;
			return <span key={item.sys.id} className={className}>{documentToReactComponents(document, options)}</span>;

		default:
			return <section key={item.sys.id} id={item.sys.id}></section>;
	}
}
