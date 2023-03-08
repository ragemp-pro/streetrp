import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { showNotification } from 'utils/notifications';
import rpc from 'utils/rpc';
import GradientButton from 'components/Common/gradient-button';
import Players from '../partials/players';
import DatePicker from '../partials/date-picker';

export default function AdminDemorgan() {
	async function setPlayerDemorgan(
		player: string,
		term?: string | null,
		reason?: string
	) {
		try {
			const isRelease = !term;

			await rpc.callServer(
				isRelease ? 'Admin-ReleaseDemorgan' : 'Admin-ToDemorgan',
				isRelease ? player : [ player, term, reason ]
			);

			showNotification(
				'success',
				isRelease ? 'Игрок освобожден' : 'Игрок заключен в деморган'
			);
		} catch ( err: any ) {
			if ( err.msg ) showNotification( 'error', err.msg );
		}
	}

	return (
		<div className="admin_demorgan">
			<Formik
				initialValues={{ reason: '', term: '', player: '' }}
				validationSchema={Yup.object( {
					reason: Yup.string().min( 1 ).max( 1000 ),
					term: Yup.date(),
					player: Yup.string().required()
				} )}
				onSubmit={( { player, term, reason } ) => setPlayerDemorgan( player, term, reason )}
			>
				{( { values, setFieldValue } ) => (
					<Form>
						<Field
							className="admin_field"
							type="text"
							name="reason"
							placeholder="причина"
						/>

						<DatePicker name="term" placeholder="Срок" />
						<Players onChange={( data ) => setFieldValue( 'player', data.dbId )} />

						<GradientButton type="submit">
							{values.term ? 'Посадить' : 'Освободить'}
						</GradientButton>
					</Form>
				)}
			</Formik>
		</div>
	);
}
