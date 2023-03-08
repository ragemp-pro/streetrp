import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { capitalize, trim } from 'lodash';
import rpc from 'utils/rpc';
import { showNotification } from 'utils/notifications';
import GradientButton from 'components/Common/gradient-button';
import OutlineButton from 'components/Common/outline-button';
import PrimaryTitle from 'components/Common/primary-title';
import Point from 'components/Common/point';
import Form from './form';

type Props = {} & RouteComponentProps;
type State = {
	name: string;
	price: number;
};

export default class Passport extends Component<Props, State> {
	readonly state = {
		name: '',
		price: 0
	};

	componentDidMount() {
		this.setState( () => this.props.location.state );
	}

	async buy( firstName: string, lastName: string ) {
		try {
			const data = {
				firstName: capitalize( trim( firstName ) ),
				lastName: capitalize( trim( lastName ) )
			};

			await rpc.callServer( 'Passport-Buy', data );

			this.setState( () => ( { name: `${ data.firstName } ${ data.lastName }` } ) );
		} catch ( err: any ) {
			if ( err.msg ) showNotification( 'error', err.msg );
		}
	}

	render() {
		const { name, price } = this.state;

		return (
			<div className="passport">
				<PrimaryTitle className="passport_title">Паспортный стол</PrimaryTitle>

				<div className="passport_container">
					<p className="passport_name">
						Ваше имя <strong>{name}</strong>
					</p>

					<Form onSubmit={this.buy.bind( this )} />

					<Point className="passport_price" amount={price} />
				</div>

				<div className="passport_footer">
					<OutlineButton isClose>Закрыть</OutlineButton>

					<GradientButton className="passport_buy" form="passport">
						Сменить
					</GradientButton>
				</div>
			</div>
		);
	}
}
