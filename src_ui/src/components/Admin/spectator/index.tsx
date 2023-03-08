import React from 'react';
import rpc from 'utils/rpc';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import GradientButton from 'components/Common/gradient-button';
import Players from '../partials/players';

export default function AdminSpectator() {
	return (
		<div className="admin_spectator">
			<Formik
				initialValues={{ player: '' }}
				validationSchema={Yup.object({
					player: Yup.number()
				})}
				onSubmit={({ player }) => rpc.callServer('Admin-Spectate', player)}
			>
				{(formik) => (
					<Form>
						<Players onChange={(data) => formik.setFieldValue('player', data.id)} />

						<GradientButton type="submit">Наблюдать</GradientButton>
					</Form>
				)}
			</Formik>
		</div>
	);
}
