import React from 'react';
import rpc from 'utils/rpc';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { showNotification } from 'utils/notifications';
import GradientButton from 'components/Common/gradient-button';
import Players from '../partials/players';

export default function AdminKick() {
	async function kickPlayer(player: string, reason: string) {
		await rpc.callServer('Admin-Kick', [player, reason]);
		showNotification('success', 'Игрок кикнут');
	}

	return (
		<div className="admin_kick">
			<Formik
				initialValues={{ reason: '', player: '' }}
				validationSchema={Yup.object({
					reason: Yup.string().required().min(1).max(1000),
					player: Yup.string().required()
				})}
				onSubmit={(values) => kickPlayer(values.player, values.reason)}
			>
				{(formik) => (
					<Form>
						<Field
							className="admin_field"
							type="text"
							name="reason"
							placeholder="причина"
						/>

						<Players onChange={(data) => formik.setFieldValue('player', data.dbId)} />

						<GradientButton type="submit">Кикнуть</GradientButton>
					</Form>
				)}
			</Formik>
		</div>
	);
}
