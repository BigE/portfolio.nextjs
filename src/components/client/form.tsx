"use client";

import { ChangeEvent, FormEvent, useState } from "react";

import styles from "@/styles/form.module.scss";
import Panel from "./panel";
import panelStyles from "@/styles/panel.module.scss";
import axios from "axios";
import Button from "./button";

export type FormProps = {
	endpoint: string;
	panelClassName?: string;
};

export default function Form( { endpoint, panelClassName, ...props }: FormProps & JSX.IntrinsicElements["form"] ) {
	const buttons: React.ReactNode[] = [<Button key="submit" className={panelStyles.button} type="submit" icon="FaEnvelope" iconClassName={panelStyles.icon} label="Send" />];
	const [state, setState] = useState({
		name: "",
		email: "",
		subject: "",
		message: "",
	});

	const handleChange = async (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		setState({ ...state, [event.target.name]: event.target.value});
	};

	const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		let formData = new FormData();

		for (let [key, value] of Object.entries(state)) {
			formData.append(key, value);
		}

		await axios.post(endpoint, formData)
			.then(({ data }) => {
				const { redirect } = data;
				window.location.href = redirect;
			})
			.catch((e) => {
				window.location.href = e.response.data.redirect;
			});
	};

	props.className ??= `${styles.form} pure-form pure-form-aligned`;
	props.onSubmit ??= handleSubmit;

	return <form {...props}>
		<Panel className={panelClassName} headline="Contact Me" icon="FaRegEnvelope" slug="contact" buttons={buttons}>
			<fieldset>
				<legend className={styles.legend}>Fill out your information below</legend>
				<div className={`${styles.container} pure-control-group`}>
					<label htmlFor="name">Name</label>
					<input id="name" name="name" type="text" autoComplete="name" onChange={handleChange} required />
				</div>
				<div className={`${styles.container} pure-control-group`}>
					<label htmlFor="email">Email</label>
					<input id="email" name="email" type="text" autoComplete="email" onChange={handleChange} required />
				</div>
				<div className={`${styles.container} pure-control-group`}>
					<label htmlFor="subject">Subject</label>
					<input id="subject" name="subject" type="text" autoComplete="off" onChange={handleChange} />
				</div>
				<div className={`${styles.container} pure-control-group`}>
					<label htmlFor="message">Message</label>
					<textarea id="message" name="message" autoComplete="off" onChange={handleChange} required></textarea>
				</div>
			</fieldset>
		</Panel>
	</form>;
}
