import { combineReducers } from 'redux';
import appReducer from './app/reducer';
import hudReducer from './hud/reducer';
import playerReducer from './player/reducer';
import phoneReducer from './phone/reducer';
import tabletReducers from './tablet';

const mainReducer = combineReducers({
	app: appReducer,
	hud: hudReducer,
	player: playerReducer,
	phone: phoneReducer,
	tablet: tabletReducers
});

export default mainReducer;
