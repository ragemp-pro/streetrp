import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { random } from 'lodash';
import rpc from 'utils/rpc';
import sound from 'assets/audio/lockpick.mp3';
import PrimaryTitle from 'components/Common/primary-title';
import OutlineButton from 'components/Common/outline-button';
import Hint from 'components/Common/hint';
import Circle from './circle';
import Locks from './locks';

type Props = {} & RouteComponentProps;
type State = {
	counter: number;
	need: number;

	rotations: {
		point: number;
		pointer: number;
	};
};

export default class Lockpick extends Component<Props, State> {
	point = React.createRef<HTMLDivElement>();

	pointer = React.createRef<HTMLDivElement>();

	readonly state: State = {
		counter: 0,
		need: 6,

		rotations: {
			point: 0,
			pointer: 0
		}
	};

	componentDidMount() {
		this.setState(() => this.props.location.state);

		this.rotate('point', random(0, 360));
	}

	rotate(element: keyof State['rotations'], deg: number) {
		this.setState((state) => ({
			rotations: { ...state.rotations, [element]: deg }
		}));
	}

	getRotationAngle(element: HTMLDivElement) {
		const matrix = window.getComputedStyle(element).getPropertyValue('transform');

		const values = matrix.split('(')[1].split(')')[0].split(',');
		const a = +values[0];
		const b = +values[1];

		return Math.round(Math.atan2(b, a) * (180 / Math.PI));
	}

	async onCircleClick() {
		if (!this.pointer.current || !this.point.current) return;

		const pointerAngle = this.getRotationAngle(this.pointer.current);
		const pointAngle = this.getRotationAngle(this.point.current);

		if (pointerAngle > pointAngle - 20 && pointerAngle < pointAngle + 20) {
			await this.setState((state) => ({ counter: state.counter + 1 }));

			new Audio(sound).play();

			if (this.state.counter >= this.state.need) await rpc.callClient('Lockpick-Success');
			else this.rotate('point', random(0, 360));
		} else {
			await rpc.callClient('Lockpick-Error');
		}
	}

	render() {
		const { rotations, counter, need } = this.state;

		return (
			<div className="lockpick">
				<PrimaryTitle className="lockpick_title">Взлом транспорта</PrimaryTitle>

				<div className="lockpick_container">
					<Circle
						point={this.point}
						pointer={this.pointer}
						rotations={rotations}
						onClick={this.onCircleClick.bind(this)}
					/>
					<Locks amount={need} opened={counter} />

					<div className="lockpick_info">
						<Hint action="click">Нажмите в центре круга</Hint>

						<p className="lockpick_info-item">
							Попадите <b>{need}</b> {need > 4 ? 'раз' : 'раза'} в кольцо
						</p>
					</div>
				</div>

				<OutlineButton
					className="lockpick_close"
					onClick={() => rpc.callClient('Lockpick-Cancel')}
				>
					Закрыть
				</OutlineButton>
			</div>
		);
	}
}
