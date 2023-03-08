import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StoreState } from 'store';
import Title from '../partials/title';
import Tabs from './tabs';
import Keys from './keys';
import Wallpaper from './wallpaper';
import Voice from './voice';

type Props = {} & ReturnType<typeof mapStateToProps>;
type State = {
	activeTab?: string;
};

class Settings extends Component<Props, State> {
	readonly state: State = {};

	openTab(name?: string) {
		this.setState(() => ({ activeTab: name }));
	}

	getTabComponent() {
		switch (this.state.activeTab) {
			case 'keys':
				return <Keys close={this.openTab.bind(this, undefined)} />;
			case 'voice':
				return <Voice close={this.openTab.bind(this, undefined)} />;
			case 'wallpaper':
				return (
					<Wallpaper
						current={this.props.wallpaper}
						close={this.openTab.bind(this, undefined)}
					/>
				);
			default:
				return null;
		}
	}

	render() {
		const { activeTab } = this.state;

		return (
			<div className="settings">
				{activeTab ? (
					this.getTabComponent()
				) : (
					<div className="settings_main">
						<Title className="settings_main-title">Настройки</Title>

						<Tabs openTab={this.openTab.bind(this)} />
					</div>
				)}
			</div>
		);
	}
}

const mapStateToProps = (state: StoreState) => ({
	wallpaper: state.phone.wallpaper
});

export default connect(mapStateToProps, {})(Settings);
