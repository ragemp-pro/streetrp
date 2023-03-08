import React, { Component } from 'react';
import { Page, Navbar, List, ListItem } from 'framework7-react';
import moment from 'moment-timezone';
import rpc from 'utils/rpc';
import { showNotification } from 'utils/notifications';

export type Call = {
	id: string;
	message: string;
	createdAt: string;
};

type State = {
	calls: Call[];
};

export default class PoliceCalls extends Component<{}, State> {
	readonly state: State = {
		calls: []
	};

	componentDidMount() {
		rpc
			.callServer( 'PoliceCalls-GetList' )
			.then( ( calls ) => this.setState( () => ( { calls } ) ) );
	}

	async markPosition( id: string ) {
		try {
			await rpc.callServer( 'PoliceCalls-MarkPosition', id );
			showNotification( 'info', 'Местоположение отмечено на карте' );
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
					{calls.reverse().map( ( call, index ) => (
						<ListItem
							key={call.id}
							title={`Вызов №${ index + 1 }`}
							after={moment( call.createdAt ).format( 'HH:mm' )}
							subtitle={call.message}
							link="#"
							onClick={this.markPosition.bind( this, call.id )}
						/>
					) )}
				</List>
			</Page>
		);
	}
}
