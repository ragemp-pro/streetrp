import React, { Component } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import rpc from 'utils/rpc';
import { StoreState } from 'store';
import { sendMessage } from 'store/app/actions';
import { commandsList, COMMANDS } from './data';
import Messages from './messages';
import Form from './form';

type Props = {} & ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps;
type State = {
	visible: boolean;
	showMessages: boolean;
	showForm: boolean;
};

export const messagesRef = React.createRef<HTMLUListElement>();
export const inputRef = React.createRef<HTMLInputElement>();

class Chat extends Component<Props, State> {
	private visibilityTimeout: NodeJS.Timeout | undefined;

	readonly state: State = {
		visible: false,
		showMessages: false,
		showForm: false
	};

	componentDidMount() {
		this.registerToEvents();

		this.scrollDown();
		this.showMessages(true);
	}

	componentDidUpdate(prevProps: Props) {
		const { messages } = this.props;

		if (prevProps.messages.length < messages.length) {
			this.showMessages(!this.state.showForm);
			this.scrollDown();
		}
	}

	componentWillUnmount() {
		document.removeEventListener('keydown', this.keyHandler);
		(mp as any).invoke('setTypingInChatState', false);
	}

	registerToEvents() {
		const api = {
			'chat:push': this.addMessage.bind(this),
			'chat:activate': this.toggleMenu.bind(this),
			'chat:show': (status: boolean) => {
				this.setState(() => ({ visible: status }));
			}
		};

		document.addEventListener('keydown', this.keyHandler);
		if (!mp?.events) return;

		Object.entries(api).forEach(([event, callback]) => {
			mp.events.add(event, callback);
		});
		(window as any).chatAPI = {
			push: api['chat:push'],
			activate: api['chat:activate'],
			show: api['chat:show']
		};
	}

	keyHandler = (ev: KeyboardEvent) => {
		const { visible, showForm } = this.state;
		const { activeElement } = document;

		if (visible && !showForm && ev.keyCode === 84 && activeElement?.tagName !== 'INPUT') {
			this.toggleMenu(true);
		}
	};

	scrollDown() {
		if (!messagesRef.current) return;
		messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
	}

	toggleMenu(status?: boolean) {
		const enabled = status ?? !this.state.showForm;

		this.setState(() => ({ showForm: enabled }));

		(mp as any).invoke('focus', enabled);
		(mp as any).invoke('setTypingInChatState', enabled);

		if (enabled) setTimeout(() => inputRef?.current?.focus(), 10);
		this.showMessages(!enabled);
	}

	showMessages(autoHide: boolean) {
		this.setState(() => ({ showMessages: true }));

		if (this.visibilityTimeout) clearTimeout(this.visibilityTimeout);
		if (autoHide) {
			this.visibilityTimeout = setTimeout(
				() => this.setState(() => ({ showMessages: false })),
				30000
			);
		}
	}

	async addMessage(text: string) {
		const prepared: string = await rpc.callClient('PlayerFriends-PrepareString', text);
		this.props.sendMessage(prepared);
	}

	getMode(text: string) {
		const command = text.split(' ')[0]?.replace('/', '');
		return (commandsList as any)[command] ? command : null;
	}

	sendMessage(value: string) {
		const text = value.trim();
		const mode = this.getMode(text);

		if (text[0] === '/' && !mode) {
			(mp as any).invoke('command', text.substr(1));
		} else if (text.length) {
			(mp as any).invoke(
				'chatMessage',
				JSON.stringify({
					mode: mode ? (commandsList as any)[mode] : COMMANDS.SAY,
					text: text.replace(`/${mode} `, '')
				})
			);
		}

		this.toggleMenu();
	}

	render() {
		const { visible, showForm, showMessages } = this.state;

		return (
			<div
				className={classNames('chat', { active: showForm })}
				style={{
					display: visible ? 'block' : 'none'
				}}
			>
				<Messages active={showMessages} items={this.props.messages} />

				{showForm && <Form onSubmit={this.sendMessage.bind(this)} />}
			</div>
		);
	}
}

const mapStateToProps = (state: StoreState) => ({
	messages: state.app.chat
});
const mapDispatchToProps = {
	sendMessage
};

export default connect(mapStateToProps, mapDispatchToProps)(Chat);
