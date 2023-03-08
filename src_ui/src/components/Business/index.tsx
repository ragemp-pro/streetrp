import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import rpc from 'utils/rpc';
import { showNotification } from 'utils/notifications';
import OutlineButton from 'components/Common/outline-button';
import GradientButton from 'components/Common/gradient-button';
import BusinessConfirm from './confirm';
import Main from './main';

type Props = {} & RouteComponentProps;

type State = {
	isOwner: boolean;
	owner: string;
	price: number;
	income: number;
	paid: number;
	tax: number;
	paymentTime: number | null;
	name: string;
	showConfirm: boolean;
};

export default class Business extends Component<Props, State> {
	readonly state: State = {
		isOwner: false,
		owner: '',
		price: 0,
		income: 0,
		paid: 0,
		tax: 0,
		paymentTime: null,
		name: '',
		showConfirm: false
	};

	componentDidMount() {
		this.setState( () => this.props.location.state );
	}

	toggleConfirmModal() {
		this.setState( ( state ) => ( { showConfirm: !state.showConfirm } ) );
	}

	setPaymentTime( time: number | null ) {
		this.setState( () => ( { paymentTime: time } ) );
	}

	async startWork() {
		const time: number = await rpc.callServer( 'Business-Start' );
		this.setPaymentTime( time );
	}

	async finishWork() {
		await rpc.callServer( 'Business-Finish' );
		this.setPaymentTime( null );
	}

	async trade() {
		const { isOwner } = this.state;

		try {
			await rpc.callServer( 'Business-Trade' );

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

	render() {
		const { showConfirm, isOwner, owner, paymentTime, income, paid, tax, name, price } =
			this.state;

		return (
			<div className="business">
				<div className="business_container">
					<Main
						isOwner={isOwner}
						owner={owner}
						name={name}
						income={income}
						paid={paid}
						price={price}
						tax={tax}
						paymentTime={paymentTime}
					/>

					<div className="business_buttons">
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

						<OutlineButton isClose>Выйти</OutlineButton>

						{isOwner &&
							( paymentTime === null ? (
								<GradientButton disabled={!isOwner} onClick={this.startWork.bind( this )}>
									Начать
								</GradientButton>
							) : (
								<GradientButton
									disabled={!isOwner || paymentTime > 0}
									onClick={this.finishWork.bind( this )}
								>
									Закончить
								</GradientButton>
							) )}
					</div>
				</div>

				{showConfirm && (
					<BusinessConfirm
						submit={this.trade.bind( this )}
						cancel={this.toggleConfirmModal.bind( this )}
					/>
				)}
			</div>
		);
	}
}
