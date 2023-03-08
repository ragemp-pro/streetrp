import React from 'react';
import { Formik, Form, FormikValues, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import rpc from 'utils/rpc';
import { showNotification } from 'utils/notifications';
import sounds from 'utils/sounds';
import GradientButton from 'components/Common/gradient-button';
import Title from './partials/title';
import Field from './partials/field';

type Props = {
	comission: number;
};

export default function BankTransfer( { comission }: Props ) {
	async function onSubmit( values: FormikValues, { resetForm }: FormikHelpers<any> ) {
		try {
			await rpc.callServer( 'Bank-Transfer', [ values.account, values.sum ] );

			resetForm();
			sounds.playPayment( 'bank' );
		} catch ( err: any ) {
			if ( err.msg ) showNotification( 'error', err.msg );
		}
	}

	function getSumWithComission( sum: number ) {
		return sum + Math.floor( sum / 100 ) * comission;
	}

	return (
		<div className="bank_tab">
			<Formik
				initialValues={{ account: '', sum: '' }}
				validationSchema={Yup.object( {
					account: Yup.string()
						.trim()
						.required()
						.matches( /^[0-9]+$/ )
						.min( 6 )
						.max( 6 ),
					sum: Yup.number().required().min( 1 ).max( 100000000 )
				} )}
				onSubmit={onSubmit}
			>
				{( { values } ) => {
					return (
						<Form>
							<Title>Перевод средств</Title>

							<div className="bank_fields">
								<Field
									type="string"
									name="account"
									placeholder="Банковский счет"
									label="Внимательно перепроверьте счет, перед отправкой"
								/>
								<Field
									type="number"
									name="sum"
									placeholder="Сумма перевода"
									label={`Сумма с учетом комиссии составляет ${ getSumWithComission(
										values.sum as any
									) }$`}
								/>
							</div>

							<GradientButton type="submit" color="purple">
								Подтвердить
							</GradientButton>
						</Form>
					);
				}}
			</Formik>
		</div>
	);
}
