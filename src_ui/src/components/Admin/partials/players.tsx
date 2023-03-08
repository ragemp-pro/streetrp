import React, { Component } from 'react';
import rpc from 'utils/rpc';
import Select from 'react-select';

type Player = {
	dbId: string;
	id: number;
	name: string;
};
type Option = {
	value: number;
	label: string;
	dbId: string;
};

type Props = {
	onChange: (data: Omit<Player, 'name'>) => void;
};
type State = {
	options: Option[];
	selected?: Option;
};

export default class AdminPlayers extends Component<Props, State> {
	readonly state: State = {
		options: []
	};

	async fetchPlayers() {
		if (this.state.options.length > 0) return;

		const data: Player[] = await rpc.callServer('Admin-GetPlayers');
		const prepared = data.map((item) => ({
			value: item.id,
			label: `${item.name} (${item.id})`,
			dbId: item.dbId
		}));

		this.setState(() => ({ options: prepared }));
	}

	selectPlayer(data: Option) {
		this.setState(() => ({ selected: data }));

		if (data) {
			this.props.onChange({ dbId: data.dbId, id: data.value });
		}
	}

	render() {
		const { options } = this.state;

		return (
			<div className="admin_players">
				<Select
					className="admin_select"
					classNamePrefix="admin_select"
					placeholder="Игрок"
					options={options}
					noOptionsMessage={() => 'Не найден'}
					onChange={(data) => this.selectPlayer(data as Option)}
					onMenuOpen={this.fetchPlayers.bind(this)}
				/>
			</div>
		);
	}
}
