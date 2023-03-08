import React, { Component } from 'react';
import rpc from 'utils/rpc';
import { showNotification } from 'utils/notifications';
import Navigation from '../../partials/navigation';
import Button from '../../partials/button';
import Group from '../../partials/group';
import List from './list';

const items: { [name: string]: string } = {
	cursor: 'Курсор',
	noHUD: 'Видимость интерфейса',
	mic: 'Голосовой чат',
	target: 'Меню игрока',
	inventory: 'Инвентарь',
	tablet: 'Планшет организации',
	engine: 'Двигатель',
	lock: 'Замок ТС',
	seatbelt: 'Ремень безопасности',
	cruise: 'Круиз-контроль',
	left_ind: 'Левый поворотник',
	right_ind: 'Правый поворотник',
	quick_1: 'Быстрый доступ 1',
	quick_2: 'Быстрый доступ 2',
	quick_3: 'Быстрый доступ 3'
};

type Props = {
	close: () => void;
};
type State = {
	binds: { [name in keyof typeof items]: string };
	selected?: string;
};

export default class SettingsKeys extends Component<Props, State> {
	readonly state: State = {
		binds: {}
	};

	componentDidMount() {
		this.getBindsFromClient();
	}

	getBindsFromClient() {
		rpc.callClient('HUD-GetBinds').then((data) => this.setState(() => ({ binds: data })));
	}

	selectKeyBind(name?: string) {
		this.setState(() => ({ selected: name }));
	}

	async saveKeyBind(key: string) {
		const { selected, binds } = this.state;

		if (!selected || binds[selected] === key) return;

		try {
			await rpc.callClient('Binder-Rebind', [selected, key]);

			this.setState(() => ({ binds: { ...binds, [selected]: key } }));
		} catch (error) {
			showNotification('error', 'Эта клавиша уже используется');
		}
	}

	render() {
		const { selected, binds } = this.state;

		return (
			<div className="settings_keys">
				{selected ? (
					<List
						name={items[selected]}
						current={binds[selected]}
						selectKey={this.saveKeyBind.bind(this)}
						close={this.selectKeyBind.bind(this, undefined)}
					/>
				) : (
					<>
						<Navigation
							title="Назначение клавиш"
							close={{ title: '', onClick: this.props.close }}
						/>

						<Group className="settings_keys-list">
							{Object.entries(items).map(([name, title]) => (
								<Button
									icon="arrow"
									key={name}
									current={binds[name]}
									onClick={this.selectKeyBind.bind(this, name)}
								>
									{title}
								</Button>
							))}
						</Group>
					</>
				)}
			</div>
		);
	}
}
