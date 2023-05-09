import { Options } from "@contentful/rich-text-react-renderer";
import { INLINES } from "@contentful/rich-text-types";

import Icon from "./icon";
import React from "react";

export const options: Options = {
	renderNode: {
		[INLINES.HYPERLINK]: (node, children) => {
			if (/^(https?:)?\/\//.test(node.data.uri)) {
				if (!Array.isArray(children)) {
					children = [children, ];
				}

				(children as Array<React.ReactNode>).push(<Icon icon="FaExternalLinkAlt" link />);
			}

			return <a href={node.data.uri}>{children}</a>},
	}
};
