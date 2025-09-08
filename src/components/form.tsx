"use server";

import { TypeForm } from "@/@types/contentful";
import Form from "./client/form";

export default async function renderForm(
	form: TypeForm<"WITHOUT_UNRESOLVABLE_LINKS", string>,
	dark: boolean = false
) {
	return (
		<Form
			key={form.sys.id}
			id={form.sys.id}
			dark={dark}
			endpoint={form.fields.url}
		></Form>
	);
}
