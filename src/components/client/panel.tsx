"use client";

import styles from "@BigE/portfolio.css/scss/components/panel.module.scss";
import Icon from "./icon";

export type PanelExtraProps = {
	dark?: boolean;
	headlineClassName?: string;
	iconClassName?: string;
};

export type PanelProps = {
	buttonAlignment?: "Default" | "Centered";
	buttons?: React.ReactNode[];
	headline: string;
	icon?: string;
	slug: string;
};

export default function Panel({
	buttonAlignment = "Default",
	buttons,
	dark,
	headline,
	headlineClassName,
	icon,
	iconClassName,
	slug,
	...props
}: PanelProps & PanelExtraProps & JSX.IntrinsicElements["section"]) {
	const buttonAlignmentClassName =
		styles[buttonAlignment.toLocaleLowerCase()] || "";
	props.className = [
		styles.panel,
		(dark && styles.dark) || "",
		props.className,
	]
		.join(" ")
		.trim();
	props.id ??= slug;

	headlineClassName = [styles.headline, headlineClassName || ""]
		.join(" ")
		.trim();
	iconClassName = [styles.icon, iconClassName || ""].join(" ").trim();

	return (
		<section {...props}>
			<header className={styles.header}>
				<h4 className={headlineClassName}>
					<Icon className={iconClassName} icon={icon} />
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
