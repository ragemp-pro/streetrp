import React from 'react';
import { Router } from 'framework7/types';
import { Page, Navbar, List, ListInput, ListButton } from 'framework7-react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import rpc from 'utils/rpc';

type Props = {
	f7router: Router.Router;
};

export default function DatabaseUsers({ f7router }: Props) {
	async function getUserData(firstName: string, lastName: string) {
		const name = `${firstName}_${lastName}`;
		const data = await rpc.callServer('GovInfo-GetUser', name);

		f7router.navigate('/database/user/', {
			props: data
		});
	}

	return (
		<Page>
			<Navbar title="Граждани" backLink="Назад" />

			<Formik
				initialValues={{ firstName: '', lastName: '' }}
				validationSchema={Yup.object({
					firstName: Yup.string().required().min(2).max(32),
					lastName: Yup.string().required().min(2).max(32)
				})}
				onSubmit={(values) => getUserData(values.firstName, values.lastName)}
			>
				{({ values, handleChange, submitForm }) => (
					<Form>
						<List inset>
							<ListInput
								clearButton
								name="firstName"
								type="text"
								placeholder="Имя"
								value={values.firstName}
								onChange={handleChange}
								onInputClear={handleChange}
							/>
							<ListInput
								clearButton
								name="lastName"
								type="text"
								placeholder="Фамилия"
								value={values.lastName}
								onChange={handleChange}
								onInputClear={handleChange}
							/>

							<ListButton title="Найти" onClick={submitForm} />
						</List>
					</Form>
				)}
			</Formik>
		</Page>
	);
}
