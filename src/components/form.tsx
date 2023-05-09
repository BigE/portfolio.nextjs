import { IForm } from "@/@types/generated/contentful";
import Panel from "./panel";
import Button from "./button";

import panelStyles from "@/styles/panel.module.scss";
import styles from "@/styles/form.module.scss";

interface FormProps {
	className?: string | undefined;
};

export default function Form(props: FormProps) {
	const buttons = [<Button key="submit" className={panelStyles.button} type="submit" icon="FaEnvelope" label="Send" />];

	return <form method="post" className={`${styles.form} pure-form pure-form-aligned`}>
		<Panel className={props.className} headline="Contact Me" icon="FaRegEnvelope" slug="contact" buttonAlignment="Default" buttons={buttons}>
			<fieldset>
				<div className={`${styles.container} pure-control-group`}>
					<label htmlFor="name">Name</label>
					<input id="name" name="name" type="text" />
				</div>
				<div className={`${styles.container} pure-control-group`}>
					<label htmlFor="email">Email</label>
					<input id="email" name="email" type="text" />
				</div>
				<div className={`${styles.container} pure-control-group`}>
					<label htmlFor="subject">Subject</label>
					<input id="subject" name="subject" type="text" />
				</div>
				<div className={`${styles.container} pure-control-group`}>
					<label htmlFor="email">Message</label>
					<textarea id="message" name="message"></textarea>
				</div>
			</fieldset>
		</Panel>
	</form>;
}

export function renderForm( form: IForm, className?: string | undefined ) {
	return <Form key={form.sys.id} className={className}></Form>
}
