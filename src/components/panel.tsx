import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

import { TypePanel } from "@/@types/contentful/TypePanel";

import styles from "@/styles/panel.module.scss";
import { renderButton } from "./button";
import Icon from "./icon";
import { RichTextOptions } from "./richText";

interface PanelProps {
	buttonAlignment: "Default" | "Centered";
	buttons?: React.ReactNode;
	dark?: boolean;
	headline: string;
	icon: string | undefined;
	slug: string;
}

export default function Panel( {
	buttonAlignment,
	buttons,
	dark,
	headline,
	icon,
	slug,
	...props
}: PanelProps & JSX.IntrinsicElements["div"] ) {
	props.className = [styles.panel, dark? styles.dark : undefined, props.className].join(' ').trim();

	return <div id={slug} {...props}>
		<header className={styles.header}>
			<h3>
				<Icon className={styles.icon} icon={icon} />
				{headline}</h3>
		</header>
		{props.children}
		{buttons &&
			<footer className={`${styles.footer} ${buttonAlignment.toLowerCase()}`}>
				{buttons}
			</footer>
		}
	</div>
}

export function renderPanel( panel: TypePanel<"WITHOUT_UNRESOLVABLE_LINKS", string>, dark?: boolean | false, className?: string | undefined ) {
	const buttons = panel.fields.buttons?.map(button => (button)? renderButton(button, [styles.button, className].join(' ').trim(), styles.icon) : <></>);

	return <Panel
		key={panel.sys.id}
		buttonAlignment={panel.fields.buttonAlignment}
		buttons={buttons}
		className={className}
		dark={dark}
		headline={panel.fields.headline}
		icon={panel.fields.fontAwesomeIcon?.fields.name}
		slug={panel.fields.slug}
	>
		{documentToReactComponents(panel.fields.richText, RichTextOptions)}
	</Panel>;
}
