import React from 'react';
import factions from 'data/factions.json';

const teamColors: { [name: string]: string } = {
	families: '#69d640',
	ballas: '#e344cb',
	vagos: '#fffc00',
	marabunta: '#56c2f5',
	bloods: '#f23838'
};

type Props = {
	name: string;
	members: number;
};

export default function CaptureTeam({ name, members }: Props) {
	return (
		<div className="capture_team">
			<h4 className="capture_team-name" style={{ color: teamColors[name] }}>
				{(factions as any)[name] ?? name}
			</h4>
			<span className="capture_team-members">{members}</span>
		</div>
	);
}
