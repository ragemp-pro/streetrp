import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import rpc from 'utils/rpc';
import { showNotification } from 'utils/notifications';
import OutlineButton from 'components/Common/outline-button';
import GradientButton from 'components/Common/gradient-button';
import Main from './main';
import Quality from './quality';
import Info from './info';
import Confirm from './confirm';

type Props = {} & RouteComponentProps;

type State = {
	index: number;
	type: string;
	isOwner: boolean;
	entrance: boolean;
	locked: boolean;
	owner: string;
	paid: number;
	price: number;
	tax: number;
	inventory: number;
	vehicles: number;
	showConfirm: boolean;
};

export default class House extends Component<Props, State> {
	readonly state: State = {
		showConfirm: false,
		index: 0,
		type: 'low',
		isOwner: false,
		entrance: false,
		locked: false,
		owner: '',
		paid: 0,
		price: 0,
		inventory: 0,
		vehicles: 0,
		tax: 0
	};

	componentDidMount() {
		this.setState( () => this.props.location.state );
	}

	toggleConfirmModal() {
		this.setState( ( state ) => ( { showConfirm: !state.showConfirm } ) );
	}

	async trade() {
		const { isOwner } = this.state;

		try {
			await rpc.callServer( 'House-Trade' );

			showNotification(
				'success',
				isOwner
					? 'Успешная продажа!'
					: 'Поздравляем с покупкой! Для оплаты услуг проследуйте в банк.'
			);

			rpc.callClient( 'Browser-HidePage' );
		} catch ( err: any ) {
			if ( err.msg ) showNotification( 'error', err.msg );
		}
	}

	async toggleLock() {
		try {
			const status: boolean = await rpc.callServer( 'House-ToggleLock' );

			this.setState( () => ( { locked: status } ) );
		} catch ( err ) {
			showNotification( 'error', 'Нет доступа!' );

			return Promise.reject();
		}
	}

	async toEnter() {
		try {
			await rpc.callServer( 'House-ToEnter' );

			rpc.callClient( 'Browser-HidePage' );
		} catch ( err ) {
			showNotification( 'error', 'Дверь заперта' );
		}
	}

	render() {
		const {
			type,
			isOwner,
			owner,
			tax,
			price,
			paid,
			entrance,
			index,
			locked,
			inventory,
			vehicles,
			showConfirm
		} = this.state;

		return (
			<div className="house">
				<div className="house_container">
					<Quality type={type} />
					<Main
						index={index}
						locked={locked}
						toggleLock={this.toggleLock.bind( this )}
						inventory={inventory}
						vehicles={vehicles}
					/>
					<Info isOwner={isOwner} owner={owner} tax={tax} price={price} paid={paid} />

					<div className="house_buttons">
						{isOwner ? (
							<GradientButton color="purple" onClick={this.toggleConfirmModal.bind( this )}>
								Продать
							</GradientButton>
						) : (
							<GradientButton
								color="green"
								disabled={!isOwner && !!owner}
								onClick={this.trade.bind( this )}
							>
								Купить
							</GradientButton>
						)}

						<OutlineButton isClose>Отмена</OutlineButton>

						<GradientButton onClick={this.toEnter.bind( this )}>
							{entrance ? 'Войти' : 'Выйти'}
						</GradientButton>
					</div>
				</div>

				{showConfirm && (
					<Confirm
						submit={this.trade.bind( this )}
						cancel={this.toggleConfirmModal.bind( this )}
					/>
				)}
			</div>
		);
	}
}
