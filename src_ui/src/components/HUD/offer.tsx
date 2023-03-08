import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import rpc from 'utils/rpc';

type State = typeof initialState;

const initialState = {
	seller: '',
	text: ''
};

export default class Offer extends Component<{}, State> {
	readonly state = initialState;

	componentDidMount() {
		rpc.register('HUD-ShowOffer', (data) => this.setState(data));
	}

	componentWillUnmount() {
		rpc.unregister('HUD-ShowOffer');
	}

	render() {
		const { seller, text } = this.state;

		return (
			<CSSTransition
				in={!!seller && !!text}
				timeout={300}
				classNames="slideRight"
				unmountOnExit
			>
				<div className="hud_offer">
					<div className="hud_offer-seller">{seller}</div>

					<p className="hud_offer-text">{text}</p>

					<p className="hud_offer-desc">
						Нажмите <b>«Y»</b>, чтобы согласиться. Для отказа - <b>«N»</b>.
					</p>
				</div>
			</CSSTransition>
		);
	}
}
