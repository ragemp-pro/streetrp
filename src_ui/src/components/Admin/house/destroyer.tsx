import React from 'react';
import rpc from 'utils/rpc';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { showNotification } from 'utils/notifications';
import GradientButton from 'components/Common/gradient-button';

export default function AdminHouseDestroyer() {
	async function destroyHouse(index: number) {
		await rpc.callServer('Admin-DeleteHouse', index);
		showNotification('success', 'Дом успешно уничтожен');
	}

	return (
		<Formik
			initialValues={{ index: '' }}
			validationSchema={Yup.object({
				index: Yup.number().required()
			})}
			onSubmit={(values) => destroyHouse(+values.index)}
		>
			<Form>
				<Field
					className="admin_field"
					type="number"
					name="index"
					placeholder="номер дома"
				/>

				<GradientButton type="submit">Снести</GradientButton>
			</Form>
		</Formik>
	);
}
