import React from 'react';
import { Router } from 'framework7/types';
import { Page, Navbar, List, ListInput, ListButton } from 'framework7-react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { showNotification } from 'utils/notifications';
import rpc from 'utils/rpc';

type Props = {
	f7router: Router.Router;
	userId: string;
};

export default function UserFine( { f7router, userId }: Props ) {
	async function writeTicket( sum: number, reason: string ) {
		try {
			if ( !userId ) return;

			await rpc.callServer( 'Police-WriteTicket', [ userId, { sum, reason } ] );

			f7router.back();
		} catch ( err: any ) {
			if ( err.msg ) showNotification( 'error', err.msg );
		}
	}

	return (
		<Page>
			<Navbar title="Штраф" backLink="Назад" />

			<Formik
				initialValues={{ sum: '', reason: '' }}
				validationSchema={Yup.object( {
					sum: Yup.number().required().min( 1 ).max( 1000000 ),
					reason: Yup.string().required().min( 1 ).max( 100 )
				} )}
				onSubmit={( values ) => writeTicket( +values.sum, values.reason )}
			>
				{( { values, handleChange, submitForm } ) => (
					<Form>
						<List inset>
							<ListInput
								clearButton
								name="sum"
								type="number"
								placeholder="Сумма"
								info="Максимальна сумма 12000$"
								value={values.sum}
								onChange={handleChange}
								onInputClear={handleChange}
							/>

							<ListInput
								clearButton
								name="reason"
								type="text"
								placeholder="Причина"
								info="Коротко опишите нарушение"
								value={values.reason}
								onChange={handleChange}
								onInputClear={handleChange}
							/>
						</List>

						<List inset>
							<ListButton title="Выписать" onClick={submitForm} />
						</List>
					</Form>
				)}
			</Formik>
		</Page>
	);
}
