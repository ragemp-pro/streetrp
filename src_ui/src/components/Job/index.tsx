import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import rpc from 'utils/rpc';
import images from 'utils/images';
import { showNotification } from 'utils/notifications';
import PrimaryTitle from 'components/Common/primary-title';
import OutlineButton from 'components/Common/outline-button';
import GradientButton from 'components/Common/gradient-button';
import Level from './level';
import Info from './info';
import jobs from './data';

type Props = {} & RouteComponentProps;
type State = {
	name: string;
	level: number;
	progress: number;
	isWorking: boolean;
	selectedLevel: number;
};

export default class Job extends Component<Props, State> {
	readonly state: State = {
		name: 'waterfront',
		level: 0,
		progress: 0,
		selectedLevel: 0,
		isWorking: false
	};

	componentDidMount() {
		if ( !this.props.location.state ) return;

		const { level } = this.props.location.state as any;
		this.setState( () => ( { ...this.props.location.state as any, selectedLevel: level } ) );
	}

	selectLevel( level: number ) {
		if ( this.state.level < level ) return;
		this.setState( () => ( { selectedLevel: level } ) );
	}

	async startWork() {
		const { name, selectedLevel } = this.state;

		try {
			await rpc.callServer( 'Jobs-StartWork', [ name, selectedLevel ] );
			this.closeMenu();
		} catch ( err: any ) {
			if ( err.msg ) showNotification( 'error', err.msg );
		}
	}

	finishWork() {
		rpc.callClient( 'Job-FinishWork' ).then( this.closeMenu );
	}

	closeMenu() {
		rpc.callClient( 'Browser-HidePage' );
	}

	render() {
		const { level, selectedLevel, progress, isWorking } = this.state;
		const name = this.state.name.toLowerCase();
		const data = jobs[ name ];

		return (
			<div
				className="job"
				style={{ backgroundImage: `url(${ images.getImage( `${ name }.jpg`, 'jobs' ) })` }}
			>
				<div className="job_container">
					<div className="job_main">
						<PrimaryTitle className="job_main-title">Работа</PrimaryTitle>
						<h3 className="job_main-name">{data.title}</h3>

						<Level
							current={selectedLevel}
							progress={selectedLevel < level ? 100 : progress}
							selectLeveL={this.selectLevel.bind( this )}
						/>
					</div>

					<Info requirements={data.requirements} description={data.description} />

					<div className="job_footer">
						<OutlineButton isClose>Закрыть</OutlineButton>

						<GradientButton
							onClick={() => ( isWorking ? this.finishWork() : this.startWork() )}
						>
							{isWorking ? 'Уволиться' : 'Устроиться'}
						</GradientButton>
					</div>
				</div>
			</div>
		);
	}
}
