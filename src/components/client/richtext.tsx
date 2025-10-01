"use client";

import {
	Options as OptionsType,
	documentToReactComponents,
} from "@contentful/rich-text-react-renderer";
import { Document, INLINES } from "@contentful/rich-text-types";

import print from "@/styles/print.module.scss";
import styles from "@BigE/portfolio.css/scss/components/richtext.module.scss";
import { ExternalLinkIcon } from "./icon";

export type RichTextProps = {
	document: Document;
	options?: OptionsType;
};

export const Options: OptionsType = {
	renderNode: {
		[INLINES.HYPERLINK]: (node, children) => {
			if (/^(https?:)?\/\//.test(node.data.uri))
				return (
					<a
						className={`${styles.link} ${styles.richtext}`}
						href={node.data.uri}
					>
						{children}
						<ExternalLinkIcon
							className={`${styles.icon} ${print.noPrint}`}
							link
						/>
					</a>
				);
			return (
				<a className={styles.link} href={node.data.uri}>
					{children}
				</a>
			);
		},
	},
	renderText: (text) =>
		text.split("\n").flatMap((text, i) => [i > 0 && <br key={i} />, text]),
};

export default function RichText({
	document,
	options = Options,
	...props
}: RichTextProps & React.JSX.IntrinsicElements["span"]) {
	props.className = [styles.richtext, props.className || ""].join(" ").trim();

	return (
		<span {...props}>{documentToReactComponents(document, options)}</span>
	);
}
