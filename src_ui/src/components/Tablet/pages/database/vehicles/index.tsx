import React from 'react';
import { Router } from 'framework7/types';
import { Page, Navbar, List, ListInput, ListButton } from 'framework7-react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import rpc from 'utils/rpc';

type Props = {
	f7router: Router.Router;
};

export default function DatabaseVehicles({ f7router }: Props) {
	async function getVehicleData(govNumber: string) {
		const data = await rpc.callServer('GovInfo-GetVehicle', govNumber);

		f7router.navigate('/database/vehicle/', {
			props: data
		});
	}

	return (
		<Page>
			<Navbar title="ТС" backLink="Назад" />

			<Formik
				initialValues={{ govNumber: '' }}
				validationSchema={Yup.object({
					govNumber: Yup.string().required().min(1).max(8)
				})}
				onSubmit={(values) => getVehicleData(values.govNumber)}
			>
				{({ values, handleChange, submitForm }) => (
					<Form>
						<List inset>
							<ListInput
								clearButton
								name="govNumber"
								type="text"
								placeholder="Гос. номер"
								value={values.govNumber}
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
