import React from 'react';
import rpc from 'utils/rpc';
import Select from 'react-select';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { showNotification } from 'utils/notifications';
import GradientButton from 'components/Common/gradient-button';

const classes = [
	{
		value: 'low',
		label: 'Эконом'
	},
	{
		value: 'average',
		label: 'Средний'
	},
	{
		value: 'premium',
		label: 'Премиум'
	}
];

export default function AdminHouseCreator() {
	async function createHouse(type: string) {
		await rpc.callServer('Admin-CreateHouse', type);
		showNotification('success', 'Дом успешно построен');
	}

	return (
		<Formik
			initialValues={{ type: '' }}
			validationSchema={Yup.object({
				type: Yup.string().required()
			})}
			onSubmit={(values) => createHouse(values.type)}
		>
			{(formik) => (
				<Form>
					<Select
						className="admin_select"
						classNamePrefix="admin_select"
						placeholder="Класс дома"
						options={classes}
						noOptionsMessage={() => 'Не найден'}
						onChange={(option) => formik.setFieldValue('type', option?.value)}
					/>

					<GradientButton type="submit">Создать</GradientButton>
				</Form>
			)}
		</Formik>
	);
}
