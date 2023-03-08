import React from 'react';
import images from 'utils/images';

export default function BankLogo() {
	return (
		<div className="bank_logo">
			<img src={images.getImage('fleeca.svg')} alt="Fleeca" />

			<h1>Банк</h1>
		</div>
	);
}
