import React, { Component } from 'react';
import { Page, Navbar, List, ListItem } from 'framework7-react';
import moment from 'moment-timezone';
import rpc from 'utils/rpc';
import { showNotification } from 'utils/notifications';

export type Call = {
	id: string;
	victim: string;
	dist: number;
	createdAt: string;
};

type State = {
	calls: Call[];
};

export default class MedicCalls extends Component<{}, State> {
	readonly state: State = {
		calls: []
	};

	componentDidMount() {
		rpc.callServer( 'EmsCalls-GetList' ).then( ( calls ) => this.setState( () => ( { calls } ) ) );
	}

	async acceptCall( id: string ) {
		try {
			await rpc.callServer( 'EmsCalls-Accept', id );

			this.setState( ( state ) => ( { calls: state.calls.filter( ( item ) => item.id !== id ) } ) );
		} catch ( err: any ) {
			if ( err.msg ) showNotification( 'error', err.msg );
		}
	}

	render() {
		const { calls } = this.state;

		return (
			<Page>
				<Navbar title="Вызовы" />

				<List mediaList inset>
					{calls.map( ( call ) => (
						<ListItem
							checkbox
							key={call.id}
							title={call.victim}
							footer={`${ Math.floor( call.dist ) } метров`}
							after={moment( call.createdAt ).format( 'HH:mm' )}
							onChange={this.acceptCall.bind( this, call.id )}
						/>
					) )}
				</List>
			</Page>
		);
	}
}
