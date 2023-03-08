import React from 'react';
import rpc from 'utils/rpc';
import { Formik, Form, Field, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import Input from '../partials/input';
import Group from '../partials/group';
import Button from '../partials/button';
import Description from '../partials/description';

export default function Support() {
	function sendMessage(message: string, { resetForm }: FormikHelpers<any>) {
		rpc.callServer('Admin-SendReport', message).then(resetForm);
	}

	return (
		<div className="support">
			<Formik
				initialValues={{ message: '' }}
				validationSchema={Yup.object({
					message: Yup.string().trim().required().min(2).max(64)
				})}
				onSubmit={(values, helpers) => sendMessage(values.message, helpers)}
			>
				{(formik) => (
					<Form>
						<Group>
							<Field
								type="text"
								name="message"
								placeholder="Сообщение"
								component={Input}
							/>

							<Button color="blue" onClick={formik.submitForm}>
								Отправить
							</Button>
						</Group>

						<Description>Опишите коротко вашу проблему, макс. 64 символа.</Description>
					</Form>
				)}
			</Formik>
		</div>
	);
}
