import React, { Component } from 'react';

type Props = {
	duration: number;
};
type State = {
	time: number;
	interval?: NodeJS.Timeout;
};

export default class DeathTimer extends Component<Props, State> {
	readonly state: State = {
		time: 0
	};

	componentDidUpdate(prevProps: Props) {
		const { duration } = this.props;

		if (duration > prevProps.duration && !this.state.interval) {
			const interval = setInterval(this.decreaseTime.bind(this), 1000);

			this.setState(() => ({ time: duration, interval }));
		}
	}

	componentWillUnmount() {
		if (this.state.interval) clearInterval(this.state.interval);
	}

	decreaseTime() {
		const { interval, time } = this.state;

		if (time > 0) this.setState((state) => ({ time: state.time - 1 }));
		else if (interval) clearInterval(interval);
	}

	getValue() {
		const { time } = this.state;

		const minutes = Math.floor(time / 60)
			.toString()
			.padStart(2, '0');
		const seconds = Math.floor(time % 60)
			.toString()
			.padStart(2, '0');

		return `${minutes}:${seconds}`;
	}

	render() {
		return (
			<div className="death_timer">
				<div className="death_timer-container">
					<h3 className="death_timer-title">До госпитализации</h3>

					<span className="death_timer-value">{this.getValue()}</span>
				</div>
			</div>
		);
	}
}
