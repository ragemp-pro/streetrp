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

export default class BankHouse extends Component<{}, State> {
	readonly state: State = {
		price: 0
	};

	async getPrice( house: number ) {
		const price = await rpc.callServer( 'House-GetTax', house );

		this.setState( () => ( { price } ) );
	}

	async onSubmit( values: FormikValues, { resetForm }: FormikHelpers<any> ) {
		try {
			await rpc.callServer( 'Bank-PayHouse', [ values.number, values.days ] );

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
					initialValues={{ number: '', days: '' }}
					validationSchema={Yup.object( {
						number: Yup.number().required().min( 0 ).max( 100000 ),
						days: Yup.number().required().min( 1 ).max( 1000 )
					} )}
					onSubmit={this.onSubmit.bind( this )}
				>
					{( formik ) => (
						<Form>
							<Title>Оплата дома</Title>

							<div className="bank_fields">
								<Field
									type="number"
									name="number"
									placeholder="Номер дома"
									label="Номер можно узнать в меню дома"
									onBlur={( e: any ) => this.getPrice( +e.target.value )}
								/>
								<Field
									type="number"
									name="days"
									placeholder="Количество дней"
									label={`Сумма к оплате ${ +formik.values.days * price }$`}
								/>
							</div>

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
