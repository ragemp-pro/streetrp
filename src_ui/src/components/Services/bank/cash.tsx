import React from 'react';
import { Formik, Form, FormikValues, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import rpc from 'utils/rpc';
import { showNotification } from 'utils/notifications';
import sounds from 'utils/sounds';
import GradientButton from 'components/Common/gradient-button';
import Title from './partials/title';
import Field from './partials/field';

export default function BankCash() {
	async function onSubmit( values: FormikValues, { resetForm }: FormikHelpers<any> ) {
		try {
			await rpc.callServer( 'Bank-CashOut', values.sum );

			resetForm();
			sounds.playPayment( 'cash' );
		} catch ( err: any ) {
			if ( err.msg ) showNotification( 'error', err.msg );
		}
	}

	return (
		<div className="bank_tab">
			<Formik
				initialValues={{ sum: '' }}
				validationSchema={Yup.object( {
					sum: Yup.number().required().min( 1 ).max( 100000000 )
				} )}
				onSubmit={onSubmit}
			>
				<Form>
					<Title>Снятие средств</Title>

					<Field type="number" name="sum" placeholder="Количество наличных" />

					<GradientButton type="submit" color="purple">
						Подтвердить
					</GradientButton>
				</Form>
			</Formik>
		</div>
	);
}
