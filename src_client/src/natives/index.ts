export const SET_BLIP_SPRITE = (blip, sprite) =>
	mp.game.invoke('0xDF735600A4696DAF', blip, sprite);
export const SET_BLIP_ALPHA = (blip, a) => mp.game.invoke('0x45FF974EEE1C8734', blip, a);
export const SET_BLIP_COLOR = (blip, c) => mp.game.invoke('0x03D7FB09E75D6B7E', blip, c);
export const SET_BLIP_ROTATION = (blip, r) =>
	mp.game.invoke('0xF87683CDF73C3F6E', blip, r);
export const SET_BLIP_FLASHES = (blip, f) =>
	mp.game.invoke('0xB14552383D39CE3E', blip, f);
export const SET_BLIP_FLASH_TIMER = (blip, t) =>
	mp.game.invoke('0xD3CD6FD297AE87CC', blip, t); // SET_BLIP_FLASH_TIMER
export const SET_BLIP_COORDS = (blip, x, y, z) =>
	mp.game.invoke('0xAE2AF67E9D9AF65D', blip, x, y, z); // SET_BLIP_COORDS
export const SET_THIS_SCRIPT_CAN_REMOVE_BLIPS_CREATED_BY_ANY_SCRIPT = (toggle) =>
	mp.game.invoke('0xB98236CAAECEF897', toggle); // SET_THIS_SCRIPT_CAN_REMOVE_BLIPS_CREATED_BY_ANY_SCRIPT
export const GET_FIRST_BLIP_INFO_ID = (i) => mp.game.invoke('0x1BEDE233E6CD2A1F', i); // GET_FIRST_BLIP_INFO_ID
export const GET_NEXT_BLIP_INFO_ID = (i) => mp.game.invoke('0x14F96AA50D6FBEA7', i); // GET_NEXT_BLIP_INFO_ID
export const DOES_BLIP_EXIST = (blip) => mp.game.invoke('0xA6DB27D19ECBB7DA', blip); // DOES_BLIP_EXIST
export const GET_NUMBER_OF_ACTIVE_BLIPS = () => mp.game.invoke('0x9A3FF3DE163034E8'); // GET_NUMBER_OF_ACTIVE_BLIPS
export const SET_BLIP_SCALE = (blip, scale) =>
	mp.game.invoke('0xD38744167B2FA257', blip, scale); // SET_BLIP_SCALE
export const SET_ENTITY_NO_COLLISION_ENTITY = (entity1, entity2, collision) =>
	mp.game.invoke('0xA53ED5520C07654A', entity1.handle, entity2.handle, collision); // SET_ENTITY_NO_COLLISION_ENTITY
