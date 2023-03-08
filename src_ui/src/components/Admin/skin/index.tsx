import React from 'react';
import rpc from 'utils/rpc';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import GradientButton from 'components/Common/gradient-button';
import Players from '../partials/players';

export default function AdminSkin() {
	return (
		<div className="admin_skin">
			<Formik
				initialValues={{ model: '', player: '' }}
				validationSchema={Yup.object({
					model: Yup.string().required(),
					player: Yup.string().required()
				})}
				onSubmit={({ player, model }) =>
					rpc.callServer('Admin-ChangeSkin', [player, model])
				}
			>
				{(formik) => (
					<Form>
						<Field
							className="admin_field"
							type="text"
							name="model"
							placeholder="модель"
						/>

						<Players onChange={(data) => formik.setFieldValue('player', data.dbId)} />

						<GradientButton type="submit">Сменить</GradientButton>
					</Form>
				)}
			</Formik>
		</div>
	);
}
