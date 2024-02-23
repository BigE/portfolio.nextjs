"use client";

import styles from "@/styles/form.module.scss";
import Panel from "./panel";

export default function Form( { ...props }: JSX.IntrinsicElements["form"] ) {
	props.className ??= `${styles.form} pure-form pure-form-aligned`;

	return <form {...props}>
		<Panel headline="Contact Me" icon="FaRegEnvelope" slug="contact">
			<fieldset>
				<legend className={styles.legend}>Fill out your information below</legend>
				<div className={`${styles.container} pure-control-group`}>
					<label htmlFor="name">Name</label>
					<input id="name" name="name" type="text" autoComplete="name" />
				</div>
				<div className={`${styles.container} pure-control-group`}>
					<label htmlFor="email">Email</label>
					<input id="email" name="email" type="text" autoComplete="email" />
				</div>
				<div className={`${styles.container} pure-control-group`}>
					<label htmlFor="subject">Subject</label>
					<input id="subject" name="subject" type="text" autoComplete="off" />
				</div>
				<div className={`${styles.container} pure-control-group`}>
					<label htmlFor="message">Message</label>
					<textarea id="message" name="message" autoComplete="off"></textarea>
				</div>
			</fieldset>
		</Panel>
	</form>;
}
