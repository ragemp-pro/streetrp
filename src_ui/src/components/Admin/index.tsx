import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import Tabs, { TabPane } from 'rc-tabs';
import OutlineButton from 'components/Common/outline-button';
import tabs from './tabs';

type Props = {} & RouteComponentProps;
type State = {
	level: number;
};

export default class Admin extends Component<Props, State> {
	readonly state: State = {
		level: 0
	};

	componentDidMount() {
		this.setState(() => this.props.location.state);
	}

	render() {
		const { level } = this.state;

		return (
			<div className="admin">
				<Tabs prefixCls="admin_tabs" tabPosition="left" destroyInactiveTabPane>
					{level &&
						tabs[level - 1].map((item, index) => (
							<TabPane tab={item.name} key={index} disabled={!item.component}>
								{item.component && React.createElement(item.component)}
							</TabPane>
						))}
				</Tabs>

				<OutlineButton className="admin_close-btn" isClose>
					Закрыть
				</OutlineButton>
			</div>
		);
	}
}
