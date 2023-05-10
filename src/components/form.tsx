import { useState } from "react";
import axios from "axios";

import styles from "@/styles/form.module.scss";
import { IForm } from "@/@types/generated/contentful";
import Panel from "./panel";
import panelStyles from "@/styles/panel.module.scss";
import Button from "./button";

interface FormProps {
	className?: string | undefined;
	endpoint: URL;
};

export default function Form(props: FormProps) {
	const buttons = [<Button key="submit" className={panelStyles.button} type="submit" icon="FaEnvelope" label="Send" />],
	      [state, setState] = useState({
			name: "",
			email: "",
			subject: "",
			message: "",
		  });

	function handleChange(e: Event) {
		setState({ ...state, [e.target.name]: e.target.value });
	}

	async function handleSubmit(e: Event) {
		e.preventDefault();

		let formData = new FormData();

		for (let [key, value] of Object.entries(state)) {
			formData.append(key, value);
		}

		await axios
			.post(props.endpoint.toString(), formData)
			.then(({ data }) => {
				const { redirect } = data;
				window.location.href = redirect;
			})
			.catch((e) => {
				window.location.href = e.response.data.redirect;
			});
	}

	return <form onSubmit={handleSubmit} className={`${styles.form} pure-form pure-form-aligned`}>
		<Panel className={props.className} headline="Contact Me" icon="FaRegEnvelope" slug="contact" buttonAlignment="Default" buttons={buttons}>
			<fieldset>
				<div className={`${styles.container} pure-control-group`}>
					<label htmlFor="name">Name</label>
					<input id="name" name="name" type="text" onChange={handleChange} />
				</div>
				<div className={`${styles.container} pure-control-group`}>
					<label htmlFor="email">Email</label>
					<input id="email" name="email" type="text" onChange={handleChange} />
				</div>
				<div className={`${styles.container} pure-control-group`}>
					<label htmlFor="subject">Subject</label>
					<input id="subject" name="subject" type="text" onChange={handleChange} />
				</div>
				<div className={`${styles.container} pure-control-group`}>
					<label htmlFor="email">Message</label>
					<textarea id="message" name="message" onChange={handleChange}></textarea>
				</div>
			</fieldset>
		</Panel>
	</form>;
}

export function renderForm( form: IForm, className?: string | undefined ) {
	return <Form key={form.sys.id} className={className} endpoint={new URL(form.fields.url)}></Form>
}
