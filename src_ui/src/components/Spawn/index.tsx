import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import classNames from 'classnames';
import rpc from 'utils/rpc';
import OutlineButton from 'components/Common/outline-button';
import PrimaryTitle from 'components/Common/primary-title';
import Selector from 'components/Common/selector';

const items = {
	exit: 'Место выхода',
	house: 'Ваш дом',
	org: 'Организация',
	start: 'Аэропорт'
};

type Props = {} & RouteComponentProps;
type State = {
	jail: boolean;
	houses: number[];
	selectedHouse: number;
} & { [K in keyof typeof items]: boolean };

export default class Spawn extends Component<Props, State> {
	readonly state: State = {
		jail: false,
		houses: [],
		selectedHouse: 0,
		exit: true,
		house: false,
		start: false,
		org: false
	};

	componentDidMount() {
		this.setState(() => this.props.location.state);
	}

	selectSpawn(type: string) {
		const { houses, selectedHouse } = this.state;

		rpc.callServer('Spawn-SelectType', [type, houses[selectedHouse]]);
		rpc.callClient('Browser-HidePage');
	}

	selectHouse(house: number) {
		this.setState((state) => ({ selectedHouse: state.houses.indexOf(house) }));
	}

	render() {
		const { jail, houses, selectedHouse } = this.state;

		return (
			<div className="spawn">
				{Object.entries(items).map(([name, title]) => (
					<div
						className={classNames('spawn_item', `spawn_item--${name}`, {
							disabled: (jail && name !== 'exit') || !(this.state as any)[name]
						})}
						key={name}
					>
						<PrimaryTitle className="spawn_title">{title}</PrimaryTitle>

						{name === 'house' && (
							<Selector
								className="spawn_selector"
								title="Выберите в каком появиться"
								circleButton
								items={houses}
								value={houses[selectedHouse]}
								onChange={this.selectHouse.bind(this)}
							/>
						)}

						<OutlineButton
							className="spawn_submit"
							onClick={this.selectSpawn.bind(this, name)}
						>
							Войти
						</OutlineButton>
					</div>
				))}
			</div>
		);
	}
}
