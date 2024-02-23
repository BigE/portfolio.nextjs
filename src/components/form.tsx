"use server";

import { TypeForm } from "@/@types/contentful";
import Form from "./client/form";

export default async function renderForm(form: TypeForm<"WITHOUT_UNRESOLVABLE_LINKS", string>) {
	return <Form key={form.sys.id} id={form.sys.id}></Form>;
}
