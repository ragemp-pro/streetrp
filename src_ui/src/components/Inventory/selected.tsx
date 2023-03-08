import React, { Component } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import images from 'utils/images';
import items from 'data/inventory.json';

type Props = {
	id: number;
	name: string;
	use?: (id: number) => void;
	separate: () => void;
	close: () => void;
};
type State = {
	position: {
		x: number;
		y: number;
	};
};

export default class InventorySelected extends Component<Props, State> {
	readonly state: State = {
		position: {
			x: 0,
			y: 0
		}
	};

	componentDidMount() {
		this.getPosition();
	}

	getPosition() {
		const rect = document
			.getElementById(`item-${this.props.id}`)
			?.getBoundingClientRect();

		if (rect) {
			this.setState(() => ({
				position: { x: rect.left + window.scrollX, y: rect.top + window.scrollY }
			}));
		}
	}

	getItemInfo() {
		return (items as any)[this.props.name];
	}

	render() {
		const { id, use, separate, close } = this.props;
		const { position } = this.state;
		const info = this.getItemInfo();

		return (
			<OutsideClickHandler onOutsideClick={close}>
				<div className="inventory_selected" style={{ top: position.y, left: position.x }}>
					<div className="inventory_selected-weight">1шт \ {info.weight}кг</div>

					<div className="inventory_selected-name">{info.name}</div>

					<div className="inventory_selected-buttons">
						<button disabled={!use} onClick={() => use && use(id)}>
							<svg className="icon">
								<use xlinkHref={`${images.getImage('use.svg')}#icon`} />
							</svg>
							Использовать
						</button>

						<button onClick={separate}>
							<svg className="icon">
								<use xlinkHref={`${images.getImage('separate.svg')}#icon`} />
							</svg>
							Разделить
						</button>
					</div>
				</div>
			</OutsideClickHandler>
		);
	}
}
