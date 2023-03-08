import React from 'react';
import rpc from 'utils/rpc';
import Select from 'react-select';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { showNotification } from 'utils/notifications';
import GradientButton from 'components/Common/gradient-button';
import factions from 'data/factions.json';
import Players from '../partials/players';

export default function AdminFactionLeader() {
	async function setLeader( player: string, faction: string ) {
		try {
			await rpc.callServer( 'Admin-SetFactionLeader', [ player, faction ] );
			showNotification( 'success', 'Игрок назначен лидером организации' );
		} catch ( err: any ) {
			if ( err.msg ) showNotification( 'error', err.msg );
		}
	}

	return (
		<Formik
			initialValues={{ faction: '', player: '' }}
			validationSchema={Yup.object( {
				faction: Yup.string().required(),
				player: Yup.string().required()
			} )}
			onSubmit={( { faction, player } ) => setLeader( player, faction )}
		>
			{( formik ) => (
				<Form>
					<Select
						className="admin_select"
						classNamePrefix="admin_select"
						placeholder="Организация"
						options={Object.entries( factions ).map( ( [ value, label ] ) => ( {
							value,
							label
						} ) )}
						noOptionsMessage={() => 'Не найдено'}
						onChange={( option ) => formik.setFieldValue( 'faction', option?.value )}
					/>

					<Players onChange={( data ) => formik.setFieldValue( 'player', data.dbId )} />

					<GradientButton type="submit">Назначить</GradientButton>
				</Form>
			)}
		</Formik>
	);
}
