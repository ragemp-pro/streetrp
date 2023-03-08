import React, { Component } from 'react';
import rpc from 'utils/rpc';
import { Call } from 'store/phone/types';
import prettify from 'utils/prettify';

type Props = {
	info: Call;
};

type State = {
	name: string;
};

export default class HUDCall extends Component<Props, State> {
	readonly state: State = {
		name: 'Anonymous'
	};

	componentDidMount() {
		this.getCallerName();
	}

	async getCallerName() {
		const { info } = this.props;

		if (info) {
			const contact = await rpc.callServer('Phone-GetContactByNumber', info.phoneNumber);

			this.setState(() => ({
				name: contact
					? `${contact.firstName} ${contact.lastName}`
					: prettify.phoneNumber(info.phoneNumber)
			}));
		}
	}

	render() {
		return (
			<div className="hud_call">
				<h4 className="hud_call-title">Вам звонят</h4>

				<div className="hud_call-name">{this.state.name}</div>
			</div>
		);
	}
}
