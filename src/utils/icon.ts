import dynamic from "next/dynamic";

export function getFontAwesomeIcon(icon: string) {
	if (!icon) icon = "FaRegQuestionCircle";
	return dynamic(() => import("react-icons/fa").then(icons => icons[icon]));
}
