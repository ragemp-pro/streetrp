import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import rpc from 'utils/rpc';
import GradientButton from 'components/Common/gradient-button';
import OutlineButton from 'components/Common/outline-button';

type Answer = {
	text: string;
	callback?: any;
};

type Props = {} & RouteComponentProps;
type State = {
	title: string;
	text: string;
	answers: Answer[];
};

export default class Dialog extends Component<Props, State> {
	readonly state: State = {
		title: '',
		text: '',
		answers: []
	};

	componentDidMount() {
		this.setState(() => this.props.location.state);
	}

	sendAnswer(index: number) {
		rpc.callClient('Dialog-SendAnswer', index);
	}

	render() {
		const { title, text, answers } = this.state;

		return (
			<div className="dialog">
				<div className="dialog_container">
					<h2 className="dialog_title">{title}</h2>
					<p className="dialog_text">{text}</p>
				</div>

				<div className="dialog_answers">
					{answers.map((item, index) =>
						item.callback ? (
							<GradientButton
								className="dialog_answers-item"
								key={index}
								onClick={this.sendAnswer.bind(this, index)}
							>
								{item.text}
							</GradientButton>
						) : (
							<OutlineButton
								className="dialog_answers-item"
								key={index}
								onClick={this.sendAnswer.bind(this, index)}
							>
								{item.text}
							</OutlineButton>
						)
					)}
				</div>
			</div>
		);
	}
}
