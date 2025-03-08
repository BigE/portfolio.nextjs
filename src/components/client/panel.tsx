"use client";

import styles from "@/styles/panel.module.scss";
import Icon from "./icon";

export type PanelProps = {
	buttonAlignment?: "Default" | "Centered";
	buttons?: React.ReactNode[];
	dark?: boolean;
	headline: string;
	icon?: string;
	slug: string;
};

export default function Panel({
	buttonAlignment = "Default",
	buttons,
	dark,
	headline,
	icon,
	slug,
	...props
}: PanelProps & JSX.IntrinsicElements["section"]) {
	const buttonAlignmentClassName =
		styles[buttonAlignment.toLocaleLowerCase()] || "";
	props.className = [styles.panel, dark && styles.dark, props.className]
		.join(" ")
		.trim();
	props.id ??= slug;

	return (
		<section {...props}>
			<header className={styles.header}>
				<h4 className={styles.headline}>
					<Icon className={styles.icon} icon={icon} />
					{headline}
				</h4>
			</header>
			{props.children}
			{buttons && (
				<footer
					className={`${styles.footer} ${buttonAlignmentClassName}`}
				>
					{buttons}
				</footer>
			)}
		</section>
	);
}
