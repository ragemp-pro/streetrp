import React, { Component } from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { App, View } from 'framework7-react';
import { StoreState } from 'store';
import { RESET_STATE } from 'store/tablet';
import { resetMembers } from 'store/tablet/members/actions';
import routes from './routes';
import StatusBar from './status-bar';
import Details from './details';
import Sidebar from './sidebar';

export type User = {
	name: string;
	faction: string;
	rank: string;
};

type Props = {} & RouteComponentProps<{}, {}, { user: User; reset: boolean }> &
	ReturnType<typeof mapStateToProps> &
	ReturnType<typeof mapDispatchToProps>;

type State = {
	lightTheme: boolean;
	activeTab: string;
	user: User;
};

class Tablet extends Component<Props, State> {
	readonly state: State = {
		lightTheme: true,
		activeTab: '',
		user: {
			name: 'Test Testovich',
			faction: 'lspd',
			rank: 'Раб'
		}
	};

	componentDidMount() {
		const { user, reset = true } = this.props.location.state ?? {};

		if (reset) this.props.resetTablet();
		if (user) this.setState(() => ({ user }));
	}

	componentWillUnmount() {
		this.props.resetMembers();
	}

	openTab(name: string) {
		this.setState(() => ({ activeTab: name }));
	}

	render() {
		const { activeTab, user, lightTheme } = this.state;

		return (
			<div className="tablet">
				<Details />

				<App theme="ios" routes={routes} themeDark={!lightTheme}>
					<div className="tablet_container">
						<StatusBar date={this.props.date} />

						<div className="tablet_content">
							<Sidebar
								user={user}
								activeTab={activeTab}
								openTab={this.openTab.bind(this)}
							/>

							<View className="tablet_tab" url="/" main />
						</div>
					</div>
				</App>
			</div>
		);
	}
}

const mapStateToProps = (state: StoreState) => ({ date: state.app.date });

const mapDispatchToProps = (dispatch: Dispatch) => ({
	resetMembers: () => dispatch(resetMembers()),
	resetTablet: () => dispatch({ type: RESET_STATE })
});

export default connect(mapStateToProps, mapDispatchToProps)(Tablet);
