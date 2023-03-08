import React from 'react';
import images from 'utils/images';

export default function InventoryHints() {
	return (
		<div className="inventory_hints">
			<div className="inventory_hints-item">
				<img src={images.getImage('esc-key.svg')} alt="mouse left" />

				<p className="inventory_hints-text">
					Нажмите <br />
					Чтобы закрыть инвентарь
				</p>
			</div>

			<div className="inventory_hints-item">
				<img src={images.getImage('mouse-left.svg')} alt="mouse left" />

				<p className="inventory_hints-text">
					Нажать на предмет <br />
					Показать информацию о предмете
				</p>
			</div>

			<div className="inventory_hints-item">
				<img src={images.getImage('zero-key.svg')} alt="mouse left" />

				<p className="inventory_hints-text">
					Нажмите <br />
					Чтобы убрать предмет из рук
				</p>
			</div>
		</div>
	);
}
