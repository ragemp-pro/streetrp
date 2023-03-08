import React from 'react';
import rpc from 'utils/rpc';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { showNotification } from 'utils/notifications';
import GradientButton from 'components/Common/gradient-button';
import Players from '../partials/players';

export default function AdminMoney() {
	async function giveMoney(player: string, amount: number) {
		await rpc.callServer('Admin-ChangeMoney', [player, amount]);
		showNotification('success', 'Операция успешна');
	}

	return (
		<div className="admin_money">
			<Formik
				initialValues={{ sum: '', player: '' }}
				validationSchema={Yup.object({
					sum: Yup.number().required().min(1).max(10000000),
					player: Yup.string().required()
				})}
				onSubmit={({ sum, player }) => giveMoney(player, +sum)}
			>
				{(formik) => (
					<Form>
						<Field className="admin_field" type="number" name="sum" placeholder="Сумма" />

						<Players onChange={(data) => formik.setFieldValue('player', data.dbId)} />

						<GradientButton type="submit">Начислить</GradientButton>
					</Form>
				)}
			</Formik>
		</div>
	);
}
