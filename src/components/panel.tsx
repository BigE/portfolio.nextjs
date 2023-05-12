import { Document } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import React from "react";

import styles from "@/styles/panel.module.scss";
import { renderButton } from "./button";
import Icon from "./icon";
import { options } from "./richText";
import { IPanel } from "@/@types/generated/contentful";

interface PanelProps {
	buttonAlignment: "Default" | "Centered";
	buttons?: React.ReactNode;
	className?: string | undefined;
	children?: React.ReactNode;
	dark?: boolean;
	headline: string;
	icon: string;
	richText?: Document | undefined;
	slug: string;
}

export default function Panel( props: PanelProps ) {
	const className = [styles.panel, props.className, props.dark? styles.dark : undefined].join(' ').trim();

	return <div id={props.slug} className={className}>
		<header className={styles.header}>
			<h3>
				<Icon className={styles.icon} icon={props.icon} />
				{props.headline}</h3>
		</header>
		{props.children}
		{props.buttons &&
			<footer className={`${styles.footer} ${props.buttonAlignment.toLowerCase()}`}>
				{props.buttons}
			</footer>
		}
	</div>
}

export function renderPanel( panel: IPanel, dark?: boolean | false, className?: string | undefined ) {
	const buttons = panel.fields.buttons?.map(button => renderButton(button, [styles.button, className].join(' ').trim()));
	className = [styles.panel, className].join(' ').trim();

	return <Panel key={panel.sys.id} className={className} dark={dark} {...panel.fields} buttons={buttons} icon={panel.fields.fontAwesomeIcon.fields.name}>
		{documentToReactComponents(panel.fields.richText, options)}
	</Panel>;
}
