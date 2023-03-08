import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import images from 'utils/images';
import sounds from 'utils/sounds';
import PrimaryTitle from './primary-title';
import OutlineButton from './outline-button';

type State = {
	showModal: boolean;
	callback?: (payment: Payment) => Promise<any>;
};

type Payment = 'bank' | 'cash';

export type WrappedProps = {
	showPayment: (callback: (payment: Payment) => Promise<any>) => void;
};

export default function withPayment(WrappedComponent: any) {
	return class extends Component<{}, State> {
		readonly state: State = {
			showModal: false
		};

		toggleModal(callback?: (payment: Payment) => Promise<any>) {
			this.setState((state) => ({ showModal: !state.showModal, callback }));
		}

		async selectType(type: Payment) {
			if (!this.state.callback) return this.toggleModal();

			await this.state.callback(type);

			sounds.playPayment(type);

			this.toggleModal();
		}

		render() {
			return (
				<>
					<WrappedComponent showPayment={this.toggleModal.bind(this)} {...this.props} />

					<CSSTransition
						in={this.state.showModal}
						timeout={0}
						classNames="fadeIn"
						unmountOnExit
					>
						<div className="payment-modal">
							<PrimaryTitle className="payment-modal_title">
								Выбор способа оплаты
							</PrimaryTitle>

							<div className="payment-modal_container">
								<div
									className="payment-modal_type payment-modal_type--bank"
									onClick={this.selectType.bind(this, 'bank')}
								>
									<img src={images.getImage('bank-card.svg')} alt="bank" />
								</div>

								<div
									className="payment-modal_type payment-modal_type--cash"
									onClick={this.selectType.bind(this, 'cash')}
								>
									<img src={images.getImage('cash.svg')} alt="cash" />
								</div>
							</div>

							<OutlineButton onClick={this.toggleModal.bind(this)}>Отмена</OutlineButton>
						</div>
					</CSSTransition>
				</>
			);
		}
	};
}
