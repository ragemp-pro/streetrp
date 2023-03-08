import rpc from 'utils/rpc';
import { toast } from 'react-toastify';

type Notification = 'info' | 'warn' | 'error' | 'success';

rpc.register(
	'Notifications-ShowItem',
	(type: Notification, message: string, inMenu: boolean) => {
		showNotification(type, message, inMenu);
	}
);

export function showNotification(type: Notification, message: string, inMenu = true) {
	toast.clearWaitingQueue();

	toast[type](message, { containerId: inMenu ? 'menu' : 'hud' });
}
