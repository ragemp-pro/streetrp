import { fromObject } from 'utils/vector';
import peds from 'data/peds.json';
import conversations from 'data/сonversations.json';
import hud from './hud';

const player = mp.players.local;

type Ped = {
	model: string;
	position: PositionEx;
	rotation: number;
	speech: string;
	voice: string;
	camera: {
		position: PositionEx;
		point: PositionEx;
	};
	conversation: number;
};
type Conversation = {
	title: string;
	text: string;
	answers: { text: string; callback?: [string, ...any[]] }[];
};
type Data = {
	index: number;
	ped: number;
};

class Dialog {
	private ped?: Ped;

	constructor() {
		this.init();
	}

	stop() {
		this.ped = null;

		player.setAlpha(255);

		mp.cameras.reset(1500);
		mp.browsers.hidePage();
	}

	private getCurrentConversation() {
		return conversations[this.ped?.conversation] as Conversation;
	}

	private show({ index }: Data) {
		if (player.vehicle) return;

		this.ped = peds[index];

		const conversation = this.getCurrentConversation();

		if (conversation) {
			player.setAlpha(0);

			this.setCamera();

			mp.browsers.showPage('dialog', conversation, true, true);
		}
	}

	private setCamera() {
		const { camera } = this.ped;

		mp.cameras.set(
			fromObject(camera.position),
			new mp.Vector3(0, 0, 0),
			camera.point,
			40,
			1500
		);
	}

	private onAnswer(index: number) {
		const conversation = this.getCurrentConversation();

		if (!conversation) return;

		const answer = conversation.answers[index];

		this.stop();

		if (answer?.callback) {
			const [event, ...data] = answer.callback;

			mp.events.callServer(event, data, false);
		}
	}

	private onEnterPedZone({ index, ped }: Data) {
		const npc = mp.peds.at(ped);

		mp.game.audio.playAmbientSpeechWithVoice(
			npc.handle,
			peds[index].speech,
			peds[index].voice,
			'SPEECH_PARAMS_FORCE_NORMAL',
			false
		);

		hud.showInteract('E');
	}

	private init() {
		mp.events.subscribe({
			'Dialog-SendAnswer': this.onAnswer.bind(this)
		});

		peds.forEach((item, index) => {
			const ped = mp.peds.new(
				mp.game.joaat(item.model),
				fromObject(item.position),
				item.rotation,
				0
			);

			mp.colshapes.create(
				item.position,
				2.5,
				{
					onEnter: this.onEnterPedZone.bind(this),
					onKeyPress: this.show.bind(this),
					onExit: () => hud.showInteract()
				},
				{ index, ped: ped.id }
			);
		});
	}
}

export default new Dialog();
