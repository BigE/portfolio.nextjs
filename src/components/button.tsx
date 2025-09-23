"use server";

import { TypeButton } from "@/@types/contentful";
import Button from "./client/button";

export type RenderButtonExtraProps = {
	className?: string;
	iconClassName?: string;
};

export type RenderButtonProps = {
	button: TypeButton<"WITHOUT_UNRESOLVABLE_LINKS", string>;
} & RenderButtonExtraProps;

export default async function renderButton({
	button,
	className,
	iconClassName,
}: RenderButtonProps) {
	return (
		<Button
			key={button.sys.id}
			className={className}
			document={button.fields.document}
			external={button.fields.externalUrl}
			fragment={button.fields.pageFragment}
			iconClassName={iconClassName}
			icon={button.fields.icon?.fields.name}
			internal={button.fields.internalPage}
			label={button.fields.label}
		/>
	);
}
