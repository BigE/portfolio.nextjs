import { Entry } from "contentful";
import { IPanel, IPureGridPanel } from "./generated/contentful";

export function isPanel(panel: IPanel | Entry<any>) {
	return panel.sys.contentType.sys.id === "panel";
}

export function isPureGridPanel(panel: IPureGridPanel | Entry<any>) {
	return panel.sys.contentType.sys.id === "pureGridPanel";
}
