import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { IoClose } from 'react-icons/io5';
import moment from 'moment-timezone';
import rpc from 'utils/rpc';
import licenses from 'data/licenses.json';

type Props = {} & RouteComponentProps<{}, {}, { licenses: { [name: string]: string } }>;

export default function PlayerLicenses({ location }: Props) {
	const items = location.state.licenses;

	return (
		<div className="player-licenses">
			<div className="player-licenses_container">
				<span
					className="faction-docs_close"
					onClick={() => rpc.callClient('Browser-HidePage')}
				>
					<IoClose />
				</span>

				<ul className="player-licenses_list">
					{Object.entries(items).map(([name, expires]) => (
						<li key={name} className="player-licenses_item">
							<h4>{(licenses as any)[name]}</h4>
							<span>{moment(expires as any).format('DD.MM.YY')}</span>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}
