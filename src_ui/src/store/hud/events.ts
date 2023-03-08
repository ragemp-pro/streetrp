import rpc from 'utils/rpc';
import { setVisible, setCapture } from './actions';
import { updateState } from '../index';

rpc.register('HUD-SetVisible', (state) => updateState(setVisible(state)));
rpc.register('HUD-SetCapture', (data) => updateState(setCapture(data)));
