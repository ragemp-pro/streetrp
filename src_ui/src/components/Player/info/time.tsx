import React from 'react';
import moment from 'moment-timezone';

type Props = {
	register: string;
	played: number;
};

export default function PlayerInfoTime({ register, played }: Props) {
	return <div className="player-info_time"></div>;
}
