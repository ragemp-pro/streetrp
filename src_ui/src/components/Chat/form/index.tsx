import React from 'react';
import { IoIosSend } from 'react-icons/io';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { inputRef } from '../index';
import { prepareValue } from './validation';

type Props = {
	onSubmit: (text: string) => void;
};

export default function ChatForm({ onSubmit }: Props) {
	return (
		<div className="chat_form">
			<Formik
				initialValues={{ command: '', message: '' }}
				validationSchema={Yup.object({
					message: Yup.string().max(120)
				})}
				onSubmit={(values) => onSubmit(prepareValue(values.message))}
			>
				<Form>
					<div className="chat_form-container">
						<Field className="chat_form-input" name="message">
							{({ field }: any) => <input type="text" ref={inputRef} {...field} />}
						</Field>

						<button type="submit" className="chat_form-submit">
							<IoIosSend />
						</button>
					</div>
				</Form>
			</Formik>
		</div>
	);
}
