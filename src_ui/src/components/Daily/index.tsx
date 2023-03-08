import React, { Component } from 'react';
import rpc from 'utils/rpc';
import { connect } from 'react-redux';
import { StoreState } from 'store';
import GradientButton from 'components/Common/gradient-button';
import OutlineButton from 'components/Common/outline-button';
import News from './news';
import Bonus from './bonus';
import Stats from './stats';
import Tasks from './tasks';

type Props = {} & ReturnType<typeof mapStateToProps>;
type State = {
	experience: [number, number];
	level: number;
	name: string;
	day: number;
	tasks: {
		[name: string]: number[];
	};
	news: string;
	bonuses: number[];
};

class Daily extends Component<Props, State> {
	readonly state: State = {
		experience: [0, 0],
		level: 0,
		name: '',
		day: 0,
		tasks: {},
		news: 'update',
		bonuses: [1000, 2000, 3000, 4000, 5000, 6000, 7000]
	};

	componentDidMount() {
		rpc.callServer('Daily-GetData').then((data) => this.setState(() => data));
	}

	async getBonus() {
		await rpc.callServer('Daily-GetAward');

		this.setState(() => ({ day: -1 }));
	}

	render() {
		const { name, news, day, bonuses, level, experience, tasks } = this.state;

		return (
			<div className="daily">
				<p className="daily_username">{name}</p>

				<div className="daily_container">
					<News type={news} />

					<div className="daily_info">
						<Stats
							money={this.props.money.points}
							level={level}
							experience={experience}
						/>
						<Tasks items={tasks} />
					</div>
				</div>

				<div className="daily_footer">
					<Bonus current={day} items={bonuses} />

					<div className="daily_buttons">
						<GradientButton disabled={day < 0} onClick={this.getBonus.bind(this)}>
							Забрать
						</GradientButton>

						<OutlineButton onClick={() => rpc.callServer('Spawn-ShowMenu')}>
							Закрыть
						</OutlineButton>
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state: StoreState) => ({
	money: state.player.money
});

export default connect(mapStateToProps, {})(Daily);
