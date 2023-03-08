import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import { History } from 'history';
import HUD from 'components/HUD';
import Auth from 'components/Auth';
import Daily from 'components/Daily';
import Character from 'components/Character';
import Spawn from 'components/Spawn';
import Phone from 'components/Phone';
import Inventory from 'components/Inventory';
import House from 'components/House';
import Business from 'components/Business';
import Dialog from 'components/Dialog';
import Player from 'components/Player';
import Job from 'components/Job';
import Services from 'components/Services';
import Games from 'components/Games';
import Trading from 'components/Trading';
import Admin from 'components/Admin';
import Factions from 'components/Factions';

export interface IRoute {
	path: string;
	component: React.ComponentClass<any, any> | React.FunctionComponent;
	exact?: boolean;
}

type Props = {
	history: History;
};

export default function Routes( { history }: Props ) {
	const routes: IRoute[] = [ ...Player, ...Services, ...Games, ...Trading, ...Factions ];

	return (
		<Router history={history}>
			<Switch>
				<Route exact path="/hud" component={HUD} />
				<Route exact path="/auth" component={Auth} />
				<Route exact path="/daily" component={Daily} />
				<Route exact path="/character" component={Character} />
				<Route exact path="/spawn" component={Spawn} />
				<Route exact path="/phone" component={Phone} />
				<Route exact path="/inventory" component={Inventory} />
				<Route exact path="/house" component={House} />
				<Route exact path="/business" component={Business} />
				<Route exact path="/dialog" component={Dialog} />
				<Route exact path="/job" component={Job} />
				<Route exact path="/admin" component={Admin} />

				{routes.map( ( props ) => (
					<Route exact {...props} key={props.path} />
				) )}
			</Switch>
		</Router>
	);
}
