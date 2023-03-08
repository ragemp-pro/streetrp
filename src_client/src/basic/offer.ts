import keycode from 'keycode';
import binder from 'utils/binder';
import hud from './hud';

class Offer {
	private current: string;

	private refuseTimer?: NodeJS.Timeout;

	constructor() {
		mp.keys.bind(+keycode('Y'), false, binder.wrapHandler(this.accept.bind(this), false));
		mp.keys.bind(+keycode('N'), false, binder.wrapHandler(this.refuse.bind(this), false));

		mp.events.subscribe({
			'Offer-Show': this.show.bind(this),
			'Offer-Create': this.create.bind(this)
		});
	}

	accept() {
		if (!this.current) return;

		mp.events.callServer('Offers-Accept', null, false);

		this.hide();
	}

	refuse() {
		if (!this.current) return;

		mp.events.callServer('Offers-Refuse', null, false);

		this.hide();
	}

	private create(id: string) {
		if (!this.current) this.current = id;
	}

	private show(seller: number, text: string, duration: number) {
		hud.showOffer(`Гражданин (${seller})`, text);

		if (duration) {
			this.refuseTimer = setTimeout(() => this.refuse(), duration);
		}

		mp.game.audio.playSoundFrontend(
			-1,
			'Boss_Blipped',
			'GTAO_Magnate_Hunt_Boss_SoundSet',
			true
		);
	}

	private hide() {
		this.current = null;

		if (this.refuseTimer) {
			clearTimeout(this.refuseTimer);
			this.refuseTimer = null;
		}

		hud.showOffer(null, null);
	}
}

export default new Offer();
