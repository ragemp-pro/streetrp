import React from 'react';
import rpc from 'utils/rpc';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { showNotification } from 'utils/notifications';
import GradientButton from 'components/Common/gradient-button';

export default function AdminVehicleDespawn() {
	async function despawnVehicle(govNumber?: string) {
		await rpc.callServer('Admin-DespawnVehicle', govNumber);
		showNotification('success', 'ТС успешно эвакуировано');
	}

	return (
		<Formik
			initialValues={{ govNumber: '' }}
			validationSchema={Yup.object({
				govNumber: Yup.string()
			})}
			onSubmit={(values) => despawnVehicle(values.govNumber)}
		>
			<Form>
				<Field
					className="admin_field"
					type="text"
					name="govNumber"
					placeholder="гос. номер"
				/>

				<GradientButton type="submit">Эвакуировать</GradientButton>
			</Form>
		</Formik>
	);
}
