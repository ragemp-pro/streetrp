import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import classNames from 'classnames';
import { IoClose } from 'react-icons/io5';
import rpc from 'utils/rpc';
import Field from './field';

type Props = {} & RouteComponentProps;
type State = {
	faction: string;
	name: string;
	rank: string;
};

export default class FactionDocs extends Component<Props, State> {
	readonly state: State = {
		faction: 'ems',
		name: '',
		rank: ''
	};

	componentDidMount() {
		this.setState(() => this.props.location.state);
	}

	closeMenu() {
		rpc.callClient('Browser-HidePage');
	}

	render() {
		const { faction, name, rank } = this.state;

		return (
			<div className={classNames('faction-docs', `faction-docs--${faction}`)}>
				<div className="faction-docs_container">
					<span className="faction-docs_close" onClick={this.closeMenu}>
						<IoClose />
					</span>

					<div className="faction-docs_fields">
						<Field title="Имя" value={name} />
						<Field title="Должность" value={rank} />
					</div>
				</div>
			</div>
		);
	}
}
