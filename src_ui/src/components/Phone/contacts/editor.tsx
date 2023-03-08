import React from 'react';
import { Formik, Form, Field } from 'formik';
import { IoIosContact } from 'react-icons/io';
import * as Yup from 'yup';
import { ContactData } from './index';
import Navigation from '../partials/navigation';
import Input from '../partials/input';
import Button from '../partials/button';
import Group from '../partials/group';

type Props = {
	contact?: ContactData;
	save: (data: ContactData) => Promise<void>;
	remove: () => Promise<void>;
	close: () => void;
};

export default function ContactEditor({ contact, save, remove, close }: Props) {
	return (
		<div className="contacts_editor">
			<Navigation
				close={{ title: 'Отменить', onClick: close }}
				action={{ title: 'Готово', form: 'contact-editor' }}
			/>

			<div className="avatar">
				{contact ? (
					`${contact.firstName.charAt(0)}${contact.lastName.charAt(0)}`
				) : (
					<IoIosContact />
				)}
			</div>

			<Formik
				initialValues={
					contact || ({ firstName: '', lastName: '', phone: '' } as ContactData)
				}
				validationSchema={Yup.object({
					firstName: Yup.string().trim().required().min(1).max(32),
					lastName: Yup.string().trim().required().min(1).max(32),
					phone: Yup.string()
						.trim()
						.required()
						.min(6)
						.max(6)
						.matches(/^[0-9]+$/)
				})}
				onSubmit={(values) => save(values)}
			>
				<Form id="contact-editor">
					<Group>
						<Field type="text" name="firstName" placeholder="Имя" component={Input} />
						<Field type="text" name="lastName" placeholder="Фамилия" component={Input} />
						<Field
							type="text"
							name="phone"
							placeholder="Номер телефона"
							component={Input}
						/>
					</Group>
				</Form>
			</Formik>

			{contact && (
				<Button onClick={remove} color="red">
					Удалить контакт
				</Button>
			)}
		</div>
	);
}
