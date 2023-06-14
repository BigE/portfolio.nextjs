import { Options } from "@contentful/rich-text-react-renderer";
import { INLINES } from "@contentful/rich-text-types";

import Icon from "./icon";
import React from "react";

export const RichTextOptions: Options = {
	renderNode: {
		[INLINES.HYPERLINK]: (node, children) => {
			if (/^(https?:)?\/\//.test(node.data.uri))
				return <a href={node.data.uri}>{children}<Icon icon="FaExternalLinkAlt" link /></a>;
			return <a href={node.data.uri}>{children}</a>},
	}
};
