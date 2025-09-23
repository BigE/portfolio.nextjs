"use server";

import { TypeForm } from "@/@types/contentful";
import Form from "./client/form";
import { PanelExtraProps } from "./client/panel";

export type RenderFormProps = {
	form: TypeForm<"WITHOUT_UNRESOLVABLE_LINKS", string>;
};

export default async function renderForm({
	form,
	...props
}: RenderFormProps & PanelExtraProps) {
	return (
		<Form
			key={form.sys.id}
			id={form.sys.id}
			endpoint={form.fields.url}
			{...props}
		></Form>
	);
}
