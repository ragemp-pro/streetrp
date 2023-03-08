import React from 'react';
import { Provider } from 'react-redux';
import { createHashHistory } from 'history';
import { ToastContainer, Zoom, Flip } from 'react-toastify';

import moment from 'moment-timezone';
import Routes from 'routes';
import store from 'store';
import rpc from 'utils/rpc';
import Chat from 'components/Chat';
import 'moment/locale/ru';

import 'assets/styles/framework7/index.less';
import 'react-toastify/dist/ReactToastify.css';
import 'rc-slider/assets/index.css';
import 'assets/styles/index.scss';

moment.locale( 'ru' );
moment.tz.setDefault( 'Europe/Moscow' );

const history = createHashHistory();

rpc.register( 'Browser-ShowPage', ( page: string, data = {} ) => {
	const path = `/${ page }`;

	if ( history.location.pathname === path ) history.push( '/', {} );
	history.push( path, data );
} );

export default function App() {
	return (
		<Provider store={store}>
			<Routes history={history} />

			<Chat />

			<ToastContainer
				enableMultiContainer
				containerId="hud"
				className="notifications"
				toastClassName="notifications_item"
				bodyClassName="notifications_body"
				position="top-center"
				transition={Zoom}
				autoClose={2300}
				closeButton={false}
				draggable={false}
				limit={1}
				newestOnTop
				hideProgressBar
			/>
			<ToastContainer
				enableMultiContainer
				containerId="menu"
				className="menu-notifications"
				toastClassName="menu-notifications-item"
				bodyClassName="menu-notifications-body"
				position="bottom-center"
				transition={Flip}
				autoClose={2300}
				closeButton={false}
				draggable={false}
				limit={1}
				newestOnTop
				hideProgressBar
			/>
		</Provider>
	);
}

// RАGEMP.PRО - Все для RAGE:MP. Портал о мультиплеере.