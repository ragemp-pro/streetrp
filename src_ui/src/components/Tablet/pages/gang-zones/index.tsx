import React, { Component } from 'react';
import {
	Page,
	Navbar,
	BlockHeader,
	BlockFooter,
	List,
	ListItem,
	ListButton
} from 'framework7-react';
import { showNotification } from 'utils/notifications';
import rpc from 'utils/rpc';
import prettify from 'utils/prettify';

type State = {
	zones: number;
	income: number;
};

export default class GangZones extends Component<{}, State> {
	readonly state: State = {
		zones: 0,
		income: 0
	};

	componentDidMount() {
		rpc.callServer( 'GangZones-GetInfo' ).then( ( data ) => this.setState( () => data ) );
	}

	async startWar() {
		try {
			await rpc.callServer( 'ZoneCapture-StartWar' );
			showNotification( 'success', 'Вы начали войну за территорию' );
		} catch ( err: any ) {
			if ( err.msg ) showNotification( 'error', err.msg );
		}
	}

	render() {
		const { zones, income } = this.state;

		return (
			<Page>
				<Navbar title="Территории" />

				<BlockHeader>Ваши территории</BlockHeader>
				<List inset>
					<ListItem title="Под контролем" after={zones.toString()} />
					<ListItem title="Доходность в час" after={prettify.price( income )} />
				</List>

				<BlockHeader>Захват</BlockHeader>

				<List inset>
					<ListButton title="Начать захват" onClick={this.startWar.bind( this )} />
				</List>
				<BlockFooter>Отметьте территорию на карте, чтобы начать захват</BlockFooter>
			</Page>
		);
	}
}
