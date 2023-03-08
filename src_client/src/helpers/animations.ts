import animationsList from 'data/animations.json';

const anims: {
	[category: string]: (AnimationData & { label: string })[];
} = {
	stand: [
		{
			dict: 'amb@world_human_cop_idles@male@idle_b',
			name: 'idle_d',
			flag: 1,
			speed: 8,
			label: 'Стойка копа'
		},
		{
			dict: 'mini@strip_club@idles@stripper',
			name: 'stripper_idle_01',
			flag: 1,
			speed: 8,
			label: 'Секси'
		},
		{
			dict: 'missmic_3_ext@leadin@mic_3_ext',
			name: '_leadin_trevor',
			flag: 1,
			speed: 8,
			label: 'Руки на поясе'
		},
		{
			dict: 'rcmbarry',
			name: 'base',
			flag: 1,
			speed: 8,
			label: 'На пафосе'
		},
		{
			dict: 'misstvrram_5',
			name: 'marines_idle_a',
			flag: 1,
			speed: 8,
			label: 'На коленке'
		},
		{
			dict: 'random@street_race',
			name: '_car_a_flirt_girl',
			flag: 1,
			speed: 8,
			label: 'Буквой Г'
		},
		{
			dict: 'rcmextreme3',
			name: 'idle',
			flag: 1,
			speed: 8,
			label: 'На корточках'
		},
		{
			dict: 'anim@mp_player_intuppernose_pick',
			name: 'idle_a',
			flag: 1,
			speed: 8,
			label: 'Ковыряться в носу'
		}
	],
	dance: [
		{
			dict: 'rcmnigel1bnmt_1b',
			name: 'dance_loop_tyler',
			speed: 8,
			flag: 33,
			label: 'Джонни Змей танцует'
		},
		{
			dict: 'misschinese2_crystalmazemcs1_cs',
			name: 'dance_loop_tao',
			speed: 8,
			flag: 33,
			label: 'Танец Тао'
		},
		{
			dict: 'mini@strip_club@private_dance@part1',
			name: 'priv_dance_p1',
			speed: 8,
			flag: 33,
			label: 'Приват'
		},
		{
			dict: 'switch@trevor@mocks_lapdance',
			name: '001443_01_trvs_28_exit_stripper',
			speed: 8,
			flag: 33,
			label: 'Стрип'
		},
		{
			dict: 'special_ped@mountain_dancer@monologue_2@monologue_2a',
			name: 'mnt_dnc_angel',
			speed: 8,
			flag: 33,
			label: 'Чечетка'
		},
		{
			dict: 'missfbi3_sniping',
			name: 'dance_m_default',
			speed: 8,
			flag: 33,
			label: 'Рэпчик'
		}
	],
	sport: [
		{
			dict: 'anim@deathmatch_intros@unarmed',
			name: 'intro_male_unarmed_e',
			speed: 8,
			flag: 49,
			label: 'Разминаться'
		},
		{
			dict: 'amb@world_human_muscle_flex@arms_at_side@base',
			name: 'base',
			speed: 8,
			flag: 49,
			label: 'Флексить мускулами'
		},
		{
			dict: 'amb@world_human_muscle_free_weights@male@barbell@base',
			name: 'base',
			speed: 8,
			flag: 1,
			label: 'Поднимать штангу'
		},
		{
			dict: 'amb@world_human_push_ups@male@base',
			name: 'base',
			speed: 8,
			flag: 1,
			label: 'Отжимание'
		},
		{
			dict: 'amb@world_human_sit_ups@male@base',
			name: 'base',
			speed: 8,
			flag: 1,
			label: 'Пресс'
		},
		{
			dict: 'amb@world_human_yoga@male@base',
			name: 'base_a',
			speed: 8,
			flag: 49,
			label: 'Йога'
		}
	],
	social: [
		{
			dict: 'mp_player_int_uppersalute',
			name: 'mp_player_int_salute',
			speed: 8,
			flag: 49,
			label: 'Отдать честь'
		},
		{
			dict: 'anim@mp_player_intcelebrationmale@face_palm',
			name: 'face_palm',
			speed: 8,
			flag: 49,
			label: 'Фейспалм'
		},
		{
			dict: 'mp_player_int_upperwank',
			name: 'mp_player_int_wank_01',
			speed: 8,
			flag: 49,
			label: 'Мастурбация'
		},
		{
			dict: 'anim@mp_player_intcelebrationmale@chicken_taunt',
			name: 'chicken_taunt',
			speed: 8,
			flag: 49,
			label: 'Петушок'
		},
		{
			dict: 'amb@code_human_in_car_mp_actions@v_sign@bodhi@rps@base',
			name: 'idle_a',
			speed: 8,
			flag: 49,
			label: 'Два пальца'
		},
		{
			dict: 'amb@world_human_cheering@female_d',
			name: 'base',
			speed: 8,
			flag: 49,
			label: 'Аплодисменты'
		},
		{
			dict: 'anim@mp_player_intselfiedock',
			name: 'idle_a',
			speed: 8,
			flag: 49,
			label: 'OK'
		},
		{
			dict: 'anim@mp_player_intselfiethumbs_up',
			name: 'idle_a',
			speed: 8,
			flag: 49,
			label: 'Лайк'
		}
	],
	others: [
		{
			dict: 'amb@code_human_cower_stand@female@base',
			name: 'base',
			speed: 8,
			flag: 1,
			label: 'Боится, чуть пригнувшись'
		},
		{
			dict: 'rcm_epsilonism4',
			name: 'eps_4_ig_1_jimmy_lookaround_idle_a_jb',
			speed: 8,
			flag: 1,
			label: 'Ищет на полу'
		},
		{
			dict: 'rcmepsilonism8',
			name: 'think',
			speed: 8,
			flag: 49,
			label: 'Чешет затылок, думает'
		},
		{
			dict: 'anim@mp_freemode_return@f@idle',
			name: 'idle_a',
			speed: 8,
			flag: 49,
			label: 'Чешет зад'
		},
		{
			dict: 'missfbi3_party_d',
			name: 'stand_talk_loop_a_male1',
			speed: 8,
			flag: 49,
			label: 'Рассказывает'
		},
		{
			dict: 'missfbi3_party_d',
			name: 'stand_talk_loop_a_male3',
			speed: 8,
			flag: 49,
			label: 'Показывает на пальцах'
		},
		{
			dict: 'rcm_barry3',
			name: 'barry_3_sit_loop',
			speed: 8,
			flag: 1,
			label: 'Присел отдохнуть на пол'
		}
	]
};

type AnimationData = {
	dict: string;
	name: string;
	speed: number;
	flag: number;
};

const localPlayer = mp.players.local;

class PlayerAnims {
	constructor() {
		mp.events.subscribe({
			'PlayerAnims-GetList': this.getList.bind(this),
			'PlayerAnims-SetAnim': this.setAnimation.bind(this)
		});

		mp.animations = this;
	}

	async play(player: PlayerMp, animation: string) {
		const data: AnimationData = animationsList[animation] ?? this.getFromHash(animation);
		if (!data || !data.dict || !mp.players.exists(player) || !player.handle) return;

		const { dict, name, speed, flag } = data;

		mp.game.streaming.requestAnimDict(dict);
		while (!mp.game.streaming.hasAnimDictLoaded(dict)) await mp.game.waitAsync(0);

		player.taskPlayAnim(dict, name, speed, 0.0, -1, flag, 0.0, false, false, false);
	}

	stop(player: PlayerMp, animation: string) {
		const data: AnimationData = animationsList[animation] ?? this.getFromHash(animation);

		if (data && mp.players.exists(player)) {
			player.stopAnimTask(data.dict, data.name, 3);
		}
	}

	private setAnimation(category: string, id?: number) {
		if (localPlayer.isCuffed()) return;

		const animation = anims[category] ? anims[category][id] : null;
		const hash = animation && this.createHash(animation);

		mp.events.callRemote('setAnimation', hash);
	}

	private createHash(data: AnimationData) {
		const { dict, name, flag, speed } = data;

		return `${dict}%${name}%${speed}%${flag}`;
	}

	private getFromHash(hash: string) {
		const animation = hash ? hash.split('%') : [];

		return (
			animation.length >= 4 && {
				dict: animation[0],
				name: animation[1],
				speed: +animation[2],
				flag: +animation[3]
			}
		);
	}

	private getList(category: string) {
		const items = anims[category];

		return items && items.map((item) => item.label);
	}
}

export default new PlayerAnims();
