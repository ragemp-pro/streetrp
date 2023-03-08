import React, { Component } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import rpc from 'utils/rpc';
import { showNotification } from 'utils/notifications';
import GradientButton from 'components/Common/gradient-button';
import Title from './partials/title';
import Field from './partials/field';

type Props = {
	price: number;
	setAccount: ( account: string ) => void;
};
type State = {};

export default class BankAccount extends Component<Props, State> {
	async buy( account?: string ) {
		try {
			const data = await rpc.callServer( 'Bank-CreateAccount', account );

			this.props.setAccount( data );
		} catch ( err: any ) {
			if ( err.msg ) showNotification( 'error', err.msg );
		}
	}

	render() {
		return (
			<div className="bank_tab">
				<Formik
					initialValues={{ account: '' }}
					validationSchema={Yup.object( {
						account: Yup.string()
							.trim()
							.required()
							.matches( /^[0-9]+$/ )
							.min( 6 )
							.max( 6 )
					} )}
					onSubmit={( values ) => this.buy( values.account )}
				>
					<Form>
						<Title>Открытие счета</Title>

						<Field
							type="text"
							name="account"
							placeholder="Желаемый номер (опционально)"
							label={`Номер должен состоять из 6 цифр, его стоимость составляет ${ this.props.price }$. Случайный номер бесплатный`}
						/>

						<div className="bank_tab-buttons">
							<GradientButton
								type="button"
								color="purple"
								onClick={this.buy.bind( this, undefined )}
							>
								Случайный
							</GradientButton>

							<GradientButton type="submit" color="orange">
								Желаемый
							</GradientButton>
						</div>
					</Form>
				</Formik>
			</div>
		);
	}
}
