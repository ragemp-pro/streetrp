interface VehicleMp {
	name: string;
	dbId?: string;
	owner: VehicleOwner;
	owners: string[];
	prevPosition?: Vector3Mp;
	inventory: InventoryItem[];
	attachments?: number[];
	despawnAt?: number;
}

type VehicleOwner = {
	player?: string;
	faction?: string;
};
