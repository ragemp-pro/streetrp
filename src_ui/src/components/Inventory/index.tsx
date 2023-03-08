import React, { Component } from 'react';
import { connect } from 'react-redux';
import { capitalize, isString } from 'lodash';
import { DndProvider } from 'react-dnd';
import { TouchBackend } from 'react-dnd-touch-backend';
import { RouteComponentProps } from 'react-router-dom';
import rpc from 'utils/rpc';
import { StoreState } from 'store';
import { showNotification } from 'utils/notifications';
import InventoryContext from './context';
import Pockets from './pockets';
import Backpack from './backpack';
import Quick from './quick';
import Indicator from './indicator';
import Selected from './selected';
import Separate from './separate';
import Preview from './preview';
import Character from './character';
import Hints from './hints';
import Storage from './storage';
import withStorage, { WrappedProps } from './with-storage';

export type InventoryItem = {
	name: string;
	amount: number;
	cell: number;
};

type Props = WrappedProps & ReturnType<typeof mapStateToProps> & RouteComponentProps;

type State = {
	showSeparate: boolean;
	selectedItem?: InventoryItem & { storage: string };
};

class Inventory extends Component<Props, State> {
	readonly state: State = {
		showSeparate: false
	};

	storage = React.createRef<any>();

	selectItem( item?: InventoryItem ) {
		if ( item && item?.cell < 0 ) return;

		this.setState(
			() => ( { selectedItem: item && item.cell >= 0 ? item : null } as State )
		);
	}

	toggleSeparate() {
		this.setState( ( state ) => ( { showSeparate: !state.showSeparate } ) );
	}

	async useItem( cell: number ) {
		if ( isString( cell ) || cell < 0 ) return;

		try {
			const { items, equipment } = this.props;
			const data = await rpc.callServer( 'Inventory-Use', cell );

			this.selectItem();

			this.props.setItems(
				data.item
					? items.map( ( item ) => ( item.cell === cell ? data.item : item ) )
					: items.filter( ( item ) => item.cell !== cell )
			);
			this.props.setWeight( data.weight );

			if ( data.equipment ) {
				this.props.setEquipment( { ...equipment, [ data.equipment ]: data.item } );
			}
		} catch ( err: any ) {
			if ( err.msg ) showNotification( 'error', err.msg );
		}
	}

	async toQuickSlot( cell: number, slot: string ) {
		const { items, equipment } = this.props;

		const equipedItem = await rpc.callServer( 'Inventory-ToQuick', [ cell, slot ] );

		this.props.setItems( items.filter( ( item ) => item.cell !== cell ) );
		this.props.setEquipment( { ...equipment, [ slot ]: equipedItem } );
	}

	async unequipItem( slot: string, cell: number ) {
		const { items, equipment } = this.props;
		const item = equipment[ slot ];

		if ( !item ) return;

		try {
			const itemCell: number = await rpc.callServer( 'Inventory-UnequipItem', [
				slot,
				cell
			] );

			this.props.setEquipment( { ...equipment, [ slot ]: undefined } as any );
			this.props.setItems( [ ...items, { ...item, cell: itemCell } ] );
		} catch ( err: any ) {
			if ( err.msg ) showNotification( 'error', err.msg );
		}
	}

	moveItem( id: number | string, cell: number, storage: string ) {
		if ( this.state.selectedItem || id === cell ) return;
		if ( isString( id ) ) return this.unequipItem( id, cell );

		if ( storage !== this.props.name && this.storage.current ) {
			this.storage.current.move( id, cell );
		} else this.props.move( id, cell );
	}

	separateItem( amount: number ) {
		const { selectedItem } = this.state;

		if ( !selectedItem || amount >= selectedItem.amount ) return;

		if ( selectedItem.storage !== this.props.name && this.storage.current ) {
			this.storage.current.separate( selectedItem, amount );
		} else this.props.separate( selectedItem, amount );

		this.selectItem();
		this.toggleSeparate();
	}

	async dropItem( id: number | string ) {
		const { items, equipment } = this.props;
		const weight: number = await rpc.callServer( 'Inventory-Drop', id );

		if ( isString( id ) ) this.props.setEquipment( { ...equipment, [ id ]: undefined } as any );
		else this.props.setItems( items.filter( ( item ) => item.cell !== id ) );

		this.props.setWeight( weight );
	}

	async transferItem( id: number, cell: number, storage: string ) {
		if ( this.state.selectedItem || !this.storage.current ) return;

		try {
			const { storage: storageState } = this.props.location.state as any;
			const inside = storageState.name === storage;

			const data: {
				item: InventoryItem;
				weight: number[];
			} = await rpc.callServer( `Inventory-${ capitalize( storageState.name ) }Transfer`, [
				inside,
				id,
				cell
			] );

			this.props.transfer( id, data.weight[ 1 ], !inside ? data.item : undefined );
			this.storage.current.transfer( id, data.weight[ 0 ], inside ? data.item : undefined );
		} catch ( err: any ) {
			if ( err.msg ) showNotification( 'error', err.msg );
		}
	}

	render() {
		const { cells, weight, satiety, equipment } = this.props;
		const { showSeparate, selectedItem } = this.state;
		const { storage: storageState } = this.props.location.state as any;

		const items = this.props.getItemsForCells();

		return (
			<DndProvider
				backend={TouchBackend}
				options={{ enableTouchEvents: true, enableMouseEvents: true }}
			>
				<InventoryContext.Provider
					value={{
						onDrop: this.moveItem.bind( this ),
						selectItem: this.selectItem.bind( this ),
						transferItem: this.transferItem.bind( this )
					}}
				>
					<div className="inventory">
						<Hints />

						<div className="inventory_container">
							<Pockets items={items} />
							<Backpack items={items} cells={cells} />

							<div className="inventory_indicators">
								<Indicator
									type="weight"
									title="Вес инвентаря"
									current={weight.current}
									max={weight.max}
								/>

								<Indicator type="satiety" title="Cытость" current={satiety} max={100} />
							</div>
						</div>

						{storageState ? (
							<Storage ref={this.storage} data={storageState} />
						) : (
							<>
								<Quick items={equipment} equip={this.toQuickSlot.bind( this )} />

								<Character
									items={equipment}
									use={this.useItem.bind( this )}
									drop={this.dropItem.bind( this )}
								/>
							</>
						)}

						{showSeparate && selectedItem ? (
							<Separate
								amount={selectedItem.amount}
								confirm={this.separateItem.bind( this )}
								cancel={this.toggleSeparate.bind( this )}
							/>
						) : (
							selectedItem && (
								<Selected
									id={selectedItem.cell}
									name={selectedItem.name}
									use={
										selectedItem.storage === this.props.name
											? this.useItem.bind( this )
											: undefined
									}
									separate={this.toggleSeparate.bind( this )}
									close={() => this.selectItem()}
								/>
							)
						)}
					</div>

					<Preview />
				</InventoryContext.Provider>
			</DndProvider>
		);
	}
}

const mapStateToProps = ( state: StoreState ) => ( {
	satiety: state.player.satiety
} );

export default connect( mapStateToProps, {} )( withStorage( Inventory as any ) );
