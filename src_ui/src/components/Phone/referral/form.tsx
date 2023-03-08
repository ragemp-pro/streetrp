import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import Group from '../partials/group';
import Input from '../partials/input';
import Button from '../partials/button';
import Description from '../partials/description';

type Props = {
	submit: (code: string) => void;
};

export default function ReferralForm({ submit }: Props) {
	return (
		<div className="referral_form">
			<Formik
				initialValues={{ code: '' }}
				validationSchema={Yup.object({
					code: Yup.string().trim().required().min(2).max(32)
				})}
				onSubmit={(values) => submit(values.code)}
			>
				{(formik) => (
					<Form>
						<Group>
							<Field type="text" name="code" placeholder="Промо-код" component={Input} />
							<Button color="blue" onClick={formik.submitForm}>
								Активировать
							</Button>
						</Group>

						<Description>Вы можете ввести один промокод и только один раз.</Description>
					</Form>
				)}
			</Formik>
		</div>
	);
}
