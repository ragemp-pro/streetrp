import React, { Component } from 'react';
import Vip from './vip';
import Profile from './profile';

type State = {
	name: string;
	vip: string;
	playedTime: number;
	registerDate: string;
	faction: string;

	level: number;
	experience: [number, number];
};

export default class PlayerInfo extends Component {
	render() {
		return (
			<div className="player-info">
				<div className="player-info_container">
					<Vip />
					<Profile />
				</div>
			</div>
		);
	}
}
