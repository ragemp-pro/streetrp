import React, { Component, Fragment } from 'react';
import rpc from 'utils/rpc';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import { StoreState } from 'store';
import images from 'utils/images';
import PhoneContext from './context';
import apps from './apps';
import Brow from './brow';
import StatusBar from './status-bar';
import Main from './main';
import Call from './call';

type Props = {} & ReturnType<typeof mapStateToProps>;
type State = {
	visible: boolean;
	app?: string;
};

class Phone extends Component<Props, State> {
	readonly state: State = {
		visible: false
	};

	componentDidMount() {
		rpc.register(
			'Phone-CanClose',
			() => !document.activeElement || document.activeElement.tagName !== 'INPUT'
		);

		setTimeout(() => this.setState(() => ({ visible: true })), 100);
	}

	componentDidUpdate(prevProps: Props) {
		if (this.props.call && !prevProps.call) this.openApp('');
	}

	shouldComponentUpdate(nextProps: Props, nextState: State) {
		return !nextState.app || apps[nextState.app].component !== Main;
	}

	getAppComponent() {
		const { app } = this.state;

		return app ? (apps[app].component as React.ComponentClass) : Main;
	}

	openApp(name?: string) {
		this.setState(() => ({ app: name }));
	}

	render() {
		const { app, visible } = this.state;
		const { date, call, wallpaper } = this.props;

		return (
			<PhoneContext.Provider value={{ openApp: this.openApp.bind(this) }}>
				<CSSTransition in={visible} timeout={300} classNames="slideUp" unmountOnExit>
					<div className="phone">
						<Brow />

						<div
							id={call ? 'call' : app}
							className="phone_container"
							style={{
								backgroundImage: `url(${images.getImage(`${wallpaper}_wp.jpg`, 'phone')})`
							}}
						>
							<StatusBar date={date} />

							<CSSTransition
								in={!!app}
								timeout={{ appear: 300, enter: 300, exit: 0 }}
								classNames="ios"
							>
								{call ? (
									<Call />
								) : (
									<Fragment>
										{React.createElement(this.getAppComponent() as any)}

										{app && (
											<button
												className="phone_close-btn"
												onClick={this.openApp.bind(this, undefined)}
											/>
										)}
									</Fragment>
								)}
							</CSSTransition>
						</div>
					</div>
				</CSSTransition>
			</PhoneContext.Provider>
		);
	}
}

const mapStateToProps = (state: StoreState) => ({
	date: state.app.date,
	call: state.phone.call,
	wallpaper: state.phone.wallpaper
});

export default connect(mapStateToProps, {})(Phone);
