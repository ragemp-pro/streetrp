const player = mp.players.local;

class StartCutscene {
	private started = false;

	private gender = 'male';

	private ped: number;

	private jet: number;

	async play(gender: 'male' | 'female') {
		this.gender = gender;

		mp.browsers.hidePage('');
		mp.game.cam.doScreenFadeOut(0);
		mp.game.audio.setAudioFlag('DisableFlightMusic', true);

		player.clearTasksImmediately();
		player.position = new mp.Vector3(-1117.778, -1557.625, 3.3819);

		mp.game.audio.prepareMusicEvent('FM_INTRO_START');

		this.clonePlayerPed();
		await this.loadScene();
		this.createJet();
		this.registerPlayerPed();
		this.createJetPassengers();

		mp.game.invoke('0xE532F5D78798DAAB', mp.game.joaat('p_cs_mp_jet_01_s')); // Unloads model from memory

		setTimeout(() => {
			mp.game.cutscene.startCutscene(4);
			mp.game.invoke('0xBEB2D9A1D9A8F55A', 9, 9, 9, 9);
			mp.game.cam.doScreenFadeIn(500);
			mp.game.audio.triggerMusicEvent('FM_INTRO_START');
		}, 500);

		this.started = true;

		mp.events.add('render', () => {
			if (!this.started) return;

			const time: number = mp.game.invoke('0xE625BEABBAFFDAB9');
			if (time > 26000) this.stop();
		});
	}

	stop() {
		mp.game.audio.triggerMusicEvent('FM_INTRO_DRIVE_END');
		mp.game.invoke('0xD220BDD222AC4A1E'); // STOP_CUTSCENE_IMMEDIATELY

		player.setAlpha(255);
		this.setEntityVisible(this.ped, false);
		// Hide Ped (Deleting Ped crashes Game)

		setTimeout(() => {
			mp.game.cam.doScreenFadeOut(100);
			mp.game.cam.doScreenFadeIn(0);
		}, 100);

		mp.events.callServer('Spawn-ToStart');
		mp.browsers.hidePage();

		this.started = false;
	}

	private async loadScene() {
		mp.game.cam.renderScriptCams(false, false, 0, false, false);
		mp.game.cutscene.requestCutscene('mp_intro_concat', 1);

		while (!mp.game.cutscene.hasThisCutsceneLoaded('mp_intro_concat')) {
			await mp.game.waitAsync(0);
		}
	}

	private createJet() {
		const hash = mp.game.joaat('p_cs_mp_jet_01_s');
		this.jet = mp.game.object.createObject(
			hash,
			-1200,
			-1490,
			142.385,
			false,
			true,
			false
		);

		mp.game.invoke('0x3910051CCECDB00C', this.jet, false); // SetEntityCleanupByEngine
		this.setEntityVisible(this.jet, true);

		mp.game.cutscene.registerEntityForCutscene(this.jet, 'MP_Plane', 0, 0, 0);
	}

	private registerPlayerPed() {
		const entNames = {
			male: 'MP_Male_Character',
			female: 'MP_Female_Character'
		};

		// Remove NPC from Cutscene
		mp.game.cutscene.registerEntityForCutscene(
			0,
			this.gender === 'male' ? entNames.female : entNames.male,
			3,
			mp.game.joaat(this.gender === 'male' ? 'mp_f_freemode_01' : 'mp_m_freemode_01'),
			0
		);
		mp.game.cutscene.registerEntityForCutscene(this.ped, entNames[this.gender], 0, 0, 0);

		this.setEntityVisible(this.ped, true);
	}

	private createJetPassengers() {
		for (let i = 1; i < 8; i++) {
			mp.game.cutscene.registerEntityForCutscene(
				0,
				`MP_Plane_Passenger_${i}`,
				3,
				mp.game.joaat('mp_m_freemode_01'),
				0
			);

			mp.game.invoke('0x4C61C75BEE8184C2', `MP_Plane_Passenger_${i}`, 0, 0); // SetCutsceneEntityStreamingFlags
		}
	}

	private clonePlayerPed() {
		this.ped = player.clone(0, false, false);
		player.setAlpha(0);
	}

	private setEntityVisible(handle: number, status: boolean) {
		mp.game.invoke('0xEA1C610A04DB6BBB', handle, status, false);
	}
}

export default new StartCutscene();
