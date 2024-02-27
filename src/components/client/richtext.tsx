import { Options } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";

import Icon from "./icon";
import React from "react";

export const options: Options = {
	renderNode: {
		[INLINES.HYPERLINK]: (node, children) => {
			if (/^(https?:)?\/\//.test(node.data.uri))
				return <a href={node.data.uri}>{children}<Icon icon="FaExternalLinkAlt" link /></a>;
			return <a href={node.data.uri}>{children}</a>},
	},
	renderText: text => text.split("\n").flatMap((text, i) => [i > 0 && <br />, text]),
};
