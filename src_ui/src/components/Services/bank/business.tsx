import React, { Component } from 'react';
import { Formik, Form, FormikValues, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import rpc from 'utils/rpc';
import { showNotification } from 'utils/notifications';
import sounds from 'utils/sounds';
import GradientButton from 'components/Common/gradient-button';
import Title from './partials/title';
import Field from './partials/field';

type State = {
	price: number;
};

export default class BankBusiness extends Component<{}, State> {
	readonly state: State = {
		price: 0
	};

	componentDidMount() {
		this.getPrice();
	}

	async getPrice() {
		const price = await rpc.callServer( 'Business-GetTax' );
		this.setState( () => ( { price } ) );
	}

	async onSubmit( values: FormikValues, { resetForm }: FormikHelpers<any> ) {
		try {
			await rpc.callServer( 'Bank-PayBusiness', [ values.days ] );

			resetForm();
			sounds.playPayment( 'bank' );
		} catch ( err: any ) {
			if ( err.msg ) showNotification( 'error', err.msg );
		}
	}

	render() {
		const { price } = this.state;

		return (
			<div className="bank_tab">
				<Formik
					initialValues={{ days: '' }}
					validationSchema={Yup.object( {
						days: Yup.number().required().min( 1 ).max( 1000 )
					} )}
					onSubmit={this.onSubmit.bind( this )}
				>
					{( formik ) => (
						<Form>
							<Title>Оплата бизнеса</Title>

							<Field
								type="number"
								name="days"
								placeholder="Количество дней"
								label={`Сумма к оплате ${ +formik.values.days * price }$`}
							/>

							<GradientButton type="submit" color="purple">
								Подтвердить
							</GradientButton>
						</Form>
					)}
				</Formik>
			</div>
		);
	}
}
