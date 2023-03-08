export function drawSprite(
	dist: string,
	name: string,
	scale: number[],
	heading: number,
	colour: any,
	x: number,
	y: number,
	layer?: number
) {
	const { graphics } = mp.game;
	const resolution = graphics.getScreenActiveResolution(0, 0);
	const textureResolution = graphics.getTextureResolution(dist, name);
	const SCALE = [
		(scale[0] * textureResolution.x) / resolution.x,
		(scale[1] * textureResolution.y) / resolution.y
	];

	if (graphics.hasStreamedTextureDictLoaded(dist)) {
		if (typeof layer === 'number') graphics.set2dLayer(layer);

		graphics.drawSprite(
			dist,
			name,
			x,
			y,
			SCALE[0],
			SCALE[1],
			heading,
			colour[0],
			colour[1],
			colour[2],
			colour[3]
		);
	} else {
		graphics.requestStreamedTextureDict(dist, true);
	}
}
