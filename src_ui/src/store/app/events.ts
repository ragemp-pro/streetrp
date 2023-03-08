import rpc from 'utils/rpc';
import { setDate, setOnline } from './actions';
import { updateState } from '../index';

rpc.register('App-SetDate', (date) => updateState(setDate(date)));
rpc.register('App-SetOnline', (count) => updateState(setOnline(count)));
