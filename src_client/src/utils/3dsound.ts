import { fromObject } from './vector';

const enable3dSound = true;
const maxVolume3dSound = 100;

let soundObjectList = [];
let soundObjectCounter = 0;

function addObject(entity: EntityMp, data: string) {
	const [soundId, range] = data.split('_');
	//mp.console.logInfo(JSON.stringify({ data, soundId, range: +range }));

	const sound = soundObjectList.find((item) => item.object === entity);

	if (sound && sound.isActive) {
		mp.events.callBrowser('3Dsound-Stop', sound.soundObjectId, false);

		sound.isActive = false;
		sound.soundId = soundId;
		sound.range = +range;
		sound.startPlayTime = Math.round(new Date().getTime() / 1000);
		sound.soundObjectId = soundObjectCounter++;
	} else {
		soundObjectList.push({
			object: entity,
			x: entity.position.x,
			y: entity.position.y,
			z: entity.position.z,
			soundId,
			range: +range,
			soundObjectId: soundObjectCounter++,
			isActive: !1,
			startPlayTime: Math.round(new Date().getTime() / 1000)
		});
	}
}

function removeObject(entity: EntityMp) {
	//mp.console.logInfo('remove object sound');
	const objIndex = soundObjectList.findIndex((item) => item.object === entity);

	if (objIndex !== -1) {
		const sound = soundObjectList[objIndex];

		if (sound.isActive) {
			mp.events.callBrowser('3Dsound-Stop', sound.soundObjectId, false);
			sound.isActive = false;

			soundObjectList.splice(objIndex, 1);
		}
	}
}

mp.events.add('entityStreamIn', (entity: EntityMp) => {
	if (entity.__objectSound) {
		addObject(entity, entity.getVariable('sound'));
	}
});
mp.events.add('entityStreamOut', (entity: EntityMp) => {
	if (entity.__objectSound) {
		removeObject(entity);
	}
});

let loadFirst = false;

function loadObject(entity: ObjectMp, data: string) {
	if (!data) {
		if (entity.__objectSound) {
			removeObject(entity);
			delete entity.__objectSound;
		}
	} else {
		entity.__objectSound = true;
		entity.notifyStreaming = true;

		if (entity.handle !== 0) addObject(entity, data);
	}
}

mp.events.addDataHandler('sound', (entity: ObjectMp, data: any) => {
	//mp.console.logInfo(JSON.stringify({ loadFirst, data }));

	if (loadFirst) loadObject(entity, data);
});

setTimeout(() => {
	mp.objects.forEach((object) => {
		const data = object.getVariable('sound');

		if (data) loadObject(object, data);
	});

	loadFirst = true;
}, 12000);

setInterval(() => {
	const { x: a, y: b, z: c } = mp.players.local.position;
	const depricated = [];

	soundObjectList.forEach((item) => {
		if ((!mp.objects.exists(item.object) || item.object.handle === 0) && item.isActive) {
			mp.events.callBrowser('3Dsound-Stop', item.soundObjectId);
			item.isActive = false;

			return depricated.push(item);
		}

		const dist = mp.game.system.vdist(item.x, item.y, item.z, a, b, c);

		if (dist > item.range) {
			if (!item.isActive) return;

			mp.events.callBrowser('3Dsound-Stop', item.soundObjectId, false);
			item.isActive = false;
		} else if (item.isActive) {
			mp.console.logInfo(
				JSON.stringify({
					// heading: mp.players.local.getOffsetFromGivenWorldCoords(item.x, item.y, item.z),
					// offset: mp.players.local.getOffsetFromInWorldCoords(item.x, item.y, item.z)
					heading: mp.game.gameplay.getHeadingFromVector2d(item.x, item.y)
				})
			);

			mp.events.callBrowser(
				'3Dsound-SetVolume',
				[item.soundObjectId, ((1 - dist / item.range) * maxVolume3dSound) / 100],
				false
			);
		} else if (enable3dSound) {
			mp.events.callBrowser(
				'3Dsound-Play',
				[
					item.soundObjectId,
					item.soundId,
					Math.max(0, Math.round(new Date().getTime() / 1000) - item.startPlayTime - 1),
					((1 - dist / item.range) * maxVolume3dSound) / 100
				],
				false
			);

			item.isActive = true;
		}
	});

	soundObjectList = soundObjectList.filter((item) => depricated.indexOf(item) === -1);
}, 1000);

export {};
