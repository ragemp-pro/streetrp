import React from 'react';
import rpc from 'utils/rpc';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { showNotification } from 'utils/notifications';
import GradientButton from 'components/Common/gradient-button';
import Players from '../partials/players';
import DatePicker from '../partials/date-picker';
import Checkbox from '../partials/checkbox';

export default function Ban() {
	async function banPlayer( reason: string, term: string, player: string ) {
		try {
			await rpc.callServer( 'Admin-Ban', [ player, term, reason ] );

			showNotification( 'success', 'Игрок забанен!' );
		} catch ( err: any ) {
			if ( err.msg ) showNotification( 'error', err.msg );
		}
	}

	return (
		<Formik
			initialValues={{ reason: '', term: '', permanent: false, player: '' }}
			validationSchema={Yup.object( {
				reason: Yup.string().required().min( 1 ).max( 1000 ),
				term: Yup.date().required(),
				player: Yup.string().required()
			} )}
			onSubmit={( values ) => banPlayer( values.reason, values.term, values.player )}
		>
			{( formik ) => (
				<Form>
					<Field
						className="admin_field"
						type="text"
						name="reason"
						placeholder="Причина"
					/>

					<DatePicker name="term" placeholder="Срок" />
					<Players onChange={( data ) => formik.setFieldValue( 'player', data.dbId )} />

					<Checkbox name="permanent" label="Навсегда" />

					<GradientButton type="submit">Забанить</GradientButton>
				</Form>
			)}
		</Formik>
	);
}
