import React, { Component, Fragment } from 'react';
import { CSSTransition } from 'react-transition-group';
import { RouteComponentProps } from 'react-router-dom';
import Login from './login';
import Register from './register';
import Forgot from './forgot';
import Confirm from './confirm';

type Props = {} & RouteComponentProps<{}, {}, { email: string }>;

type State = {
	email: string;
	activeForm?: string;
};

export default class Auth extends Component<Props, State> {
	readonly state: State = {
		email: '',
		activeForm: 'login'
	};

	componentDidMount() {
		this.setState(() => this.props.location.state);
	}

	getForm() {
		const { activeForm, email } = this.state;

		switch (activeForm) {
			case 'register':
				return (
					<Register
						setEmail={this.setEmail.bind(this)}
						toLogin={this.openForm.bind(this, 'login')}
					/>
				);

			case 'forgot':
				return <Forgot toLogin={this.openForm.bind(this, 'login')} />;

			case 'confirm':
				return <Confirm email={email} />;

			default:
				return (
					<Login
						setEmail={this.setEmail.bind(this)}
						openForm={this.openForm}
						email={email || this.props.location.state.email}
					/>
				);
		}
	}

	setEmail(email: string) {
		this.setState(() => ({ email }));
	}

	openForm = (name: string) => {
		this.setState(() => ({ activeForm: undefined }));

		setTimeout(() => this.setState(() => ({ activeForm: name })), 100);
	};

	render() {
		return (
			<div className="auth">
				<CSSTransition in={!!this.state.activeForm} timeout={300} classNames="alert">
					{this.state.activeForm ? this.getForm() : <Fragment />}
				</CSSTransition>
			</div>
		);
	}
}
