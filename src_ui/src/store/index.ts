import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension/logOnlyInProduction';
import rootReducer from './reducers';

const initialState = {};
const store = createStore(rootReducer, initialState, devToolsEnhancer({}));

export type StoreState = ReturnType<typeof rootReducer>;

export function updateState(data: { type: string; payload?: any }) {
	store.dispatch(data);
}

export default store;
