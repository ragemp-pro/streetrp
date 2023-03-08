import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
// @ts-ignore
import AnimatedNumber from 'animated-number-react';
import rpc from 'utils/rpc';

type State = {
	visible: boolean;
	current: number;
	experience: [number, number];
};

export default class Level extends Component<{}, State> {
	private visibilityTimeout?: NodeJS.Timeout;

	readonly state: State = {
		visible: false,
		current: 0,
		experience: [0, 0]
	};

	componentDidMount() {
		rpc.register('HUD-ShowLevel', this.showStats.bind(this));
	}

	componentWillUnmount() {
		if (this.visibilityTimeout) clearTimeout(this.visibilityTimeout);

		rpc.unregister('HUD-ShowLevel');
	}

	showStats(data: Omit<State, 'visible'>) {
		this.setState(() => ({ ...data, visible: true }));

		this.visibilityTimeout = setTimeout(
			() => this.setState(() => ({ visible: false })),
			6000
		);
	}

	render() {
		const { visible, current, experience } = this.state;
		const percentage = (experience[0] * 100) / experience[1];

		return (
			<CSSTransition in={visible} timeout={300} classNames="alert" unmountOnExit>
				<div className="hud_level">
					<span className="hud_level-current">{current}</span>

					<div className="hud_level-progress">
						<div className="bar">
							{[...Array(5).keys()].map((item) => (
								<progress
									className="bar_part"
									key={item}
									value={percentage <= item * 20 ? 0 : percentage}
									max={(item + 1) * 20}
								/>
							))}
						</div>

						<div className="hud_level-exp">
							<AnimatedNumber
								value={experience[0]}
								duration={600}
								formatValue={(value: any) => parseInt(value, 10)}
							/>{' '}
							\ {experience[1]}
						</div>
					</div>
				</div>
			</CSSTransition>
		);
	}
}
