import React from 'react';

export interface InventoryContext {
	onDrop: (item: number | string, cell: number, storage: string) => void;
	selectItem: (item?: any) => void;
	transferItem: (id: number, cell: number, storage: string) => void;
}

const InventoryContext = React.createContext<InventoryContext | null>(null);
export default InventoryContext;
