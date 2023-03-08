import React from 'react';
import { IoIosPerson } from 'react-icons/io';
// @ts-ignore
import AnimatedNumber from 'animated-number-react';
import images from 'utils/images';

type Props = {
	playerId: number;
	count: number;
};

export default function Online({ playerId, count }: Props) {
	return (
		<div className="hud_online">
			<div className="hud_online-logo">
				<img src={images.getImage('logo.svg')} alt="StreetRP logo" />
			</div>

			<div className="hud_online-container">
				<p className="player-id">ID:{playerId}</p>

				<div className="hud_online-count">
					<IoIosPerson />

					<AnimatedNumber value={count} duration={300} formatValue={parseInt} />
				</div>
			</div>
		</div>
	);
}
