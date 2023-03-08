import React from 'react';
import images from 'utils/images';

export default function LscHints() {
	return (
		<div className="lsc_hints">
			<div className="lsc_hints-item">
				<img src={images.getImage('mouse-drag.svg')} alt="mouse left" />

				<p className="lsc_hints-text">Поворот</p>
			</div>
		</div>
	);
}
