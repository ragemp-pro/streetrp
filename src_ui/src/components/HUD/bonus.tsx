import React, { Component } from 'react';
import Point from 'components/Common/point';

type Props = {
	time: number;
};
type State = {
	min: number;
	hour: number;
};

class Bonus extends Component<Props, State> {
	private progressInterval?: NodeJS.Timeout;

	readonly state: State = {
		min: 0,
		hour: 0
	};

	componentDidMount() {
		this.runTimer(this.props.time);
	}

	componentWillUnmount() {
		this.stopTimer();
	}

	runTimer(time?: number) {
		if (!time || time < 0) return;

		this.setState(() => ({
			hour: Math.floor(time / 60),
			min: Math.floor(time % 60)
		}));

		this.progressInterval = setInterval(() => {
			const { hour, min } = this.state;

			if (hour === 0 && min === 0) return this.stopTimer();

			if (min > 0) this.setState((state) => ({ min: state.min - 1 }));
			else if (hour > 0) this.setState((state) => ({ hour: state.hour - 1, min: 59 }));
		}, 60000);
	}

	stopTimer() {
		if (this.progressInterval) {
			clearInterval(this.progressInterval);

			this.progressInterval = undefined;
			this.forceUpdate();
		}
	}

	render() {
		const { hour, min } = this.state;

		return (
			(hour > 0 || min > 0) && (
				<div className="hud_bonus">
					<div className="hud_bonus-time">
						{`${hour.toString().padStart(2, '0')}:${min.toString().padStart(2, '0')}`}
					</div>

					<div className="hud_bonus-sum">
						<Point amount={100} />
					</div>
				</div>
			)
		);
	}
}

export default Bonus;
