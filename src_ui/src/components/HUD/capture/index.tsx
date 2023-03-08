import React from 'react';
import { Capture } from 'store/hud/types';
import Team from './team';
import Timer from './timer';

type Props = {} & Capture;

export default function HUDCapture({ time, defender, attacker }: Props) {
	return time > 0 ? (
		<div className="capture">
			<Team {...defender} />
			<Timer current={time} max={600} />
			<Team {...attacker} />
		</div>
	) : null;
}
