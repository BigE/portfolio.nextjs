"use server";

import { TypeButton } from "@/@types/contentful";
import Button from "./client/button";

export default async function renderButton(button: TypeButton<"WITHOUT_UNRESOLVABLE_LINKS", string>, className?: string, iconClassName?: string) {
	return <Button
		className={className}
		document={button.fields.document}
		external={button.fields.externalUrl}
		fragment={button.fields.pageFragment}
		iconClassName={iconClassName}
		icon={button.fields.icon?.fields.name}
		internal={button.fields.internalPage}
		label={button.fields.label}
	/>;
}
