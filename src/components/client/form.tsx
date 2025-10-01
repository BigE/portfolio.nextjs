"use client";

import { ChangeEvent, FormEvent, useState } from "react";

import styles from "@BigE/portfolio.css/scss/components/form.module.scss";
import Panel, { PanelExtraProps } from "./panel";
import panelStyles from "@BigE/portfolio.css/scss/components/panel.module.scss";
import axios from "axios";
import Button from "./button";

export type FormProps = {
	endpoint: string;
	panelClassName?: string;
};

export default function Form({
	dark = false,
	endpoint,
	headlineClassName,
	iconClassName,
	panelClassName,
	...props
}: FormProps & PanelExtraProps & React.JSX.IntrinsicElements["form"]) {
	const buttons: React.ReactNode[] = [
		<Button
			key="submit"
			className={panelStyles.button}
			type="submit"
			icon="FaEnvelope"
			iconClassName={panelStyles.icon}
			label="Send"
		/>,
	];
	const [state, setState] = useState({
		name: "",
		email: "",
		subject: "",
		message: "",
	});

	const handleChange = async (
		event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setState({ ...state, [event.target.name]: event.target.value });
	};

	const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		const formData = new FormData();

		for (const [key, value] of Object.entries(state)) {
			formData.append(key, value);
		}

		await axios
			.post(endpoint, formData)
			.then(({ data }) => {
				const { redirect } = data;
				window.location.href = redirect;
			})
			.catch((e) => {
				window.location.href = e.response.data.redirect;
			});
	};

	props.className = [
		"pure-form",
		"pure-form-aligned",
		styles.form,
		dark ? styles.dark : "",
		props.className || "",
	]
		.join(" ")
		.trim();
	props.onSubmit ??= handleSubmit;

	return (
		<form {...props}>
			<Panel
				className={panelClassName}
				dark={dark}
				headline="Contact Me"
				headlineClassName={headlineClassName}
				icon="FaRegEnvelope"
				iconClassName={iconClassName}
				slug="contact"
				buttons={buttons}
			>
				<fieldset>
					<legend className={styles.legend}>
						Fill out your information below
					</legend>
					<div className={`${styles.container} pure-control-group`}>
						<label htmlFor="name">Name</label>
						<input
							className={styles.input}
							id="name"
							name="name"
							type="text"
							autoComplete="name"
							onChange={handleChange}
							required
						/>
					</div>
					<div className={`${styles.container} pure-control-group`}>
						<label htmlFor="email">Email</label>
						<input
							className={styles.input}
							id="email"
							name="email"
							type="text"
							autoComplete="email"
							onChange={handleChange}
							required
						/>
					</div>
					<div className={`${styles.container} pure-control-group`}>
						<label htmlFor="subject">Subject</label>
						<input
							className={styles.input}
							id="subject"
							name="subject"
							type="text"
							autoComplete="off"
							onChange={handleChange}
						/>
					</div>
					<div className={`${styles.container} pure-control-group`}>
						<label htmlFor="message">Message</label>
						<textarea
							className={styles.textarea}
							id="message"
							name="message"
							autoComplete="off"
							onChange={handleChange}
							required
						></textarea>
					</div>
				</fieldset>
			</Panel>
		</form>
	);
}
