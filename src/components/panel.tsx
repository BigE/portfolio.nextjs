import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

import { TypePanel } from "@/@types/contentful/TypePanel";

import styles from "@/styles/panel.module.scss";
import { renderButton } from "./button";
import Icon from "./icon";
import { options } from "./richText";

interface PanelProps {
	buttonAlignment: "Default" | "Centered";
	buttons?: React.ReactNode;
	className?: string | undefined;
	children?: React.ReactNode;
	dark?: boolean;
	headline: string;
	icon: string | undefined;
	slug: string;
}

export default function Panel( props: PanelProps ) {
	const className = [styles.panel, props.dark? styles.dark : undefined, props.className].join(' ').trim();

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

export function renderPanel( panel: TypePanel<"WITHOUT_UNRESOLVABLE_LINKS", string>, dark?: boolean | false, className?: string | undefined ) {
	const buttons = panel.fields.buttons?.map(button => (button)? renderButton(button, [styles.button, className].join(' ').trim(), styles.icon) : <></>);

	if (!panel.fields.headline) throw Error("Headline is required");

	return <Panel key={panel.sys.id} className={className} dark={dark} {...panel.fields} buttons={buttons} icon={panel.fields.fontAwesomeIcon?.fields.name}>
		{documentToReactComponents(panel.fields.richText, options)}
	</Panel>;
}
