import React from 'react';
import rpc from 'utils/rpc';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import GradientButton from 'components/Common/gradient-button';

export default function AdminChat() {
	return (
		<div className="admin_chat">
			<Formik
				initialValues={{ message: '' }}
				validationSchema={Yup.object({
					message: Yup.string().required().min(4).max(1000)
				})}
				onSubmit={({ message }) => rpc.callServer('Admin-SendToChat', message)}
			>
				<Form>
					<Field
						className="admin_field"
						type="text"
						name="message"
						placeholder="сообщение в чат"
					/>

					<GradientButton type="submit">Отправить</GradientButton>
				</Form>
			</Formik>
		</div>
	);
}
