import { isNumber, isString } from 'lodash';

class Prettify {
	price(value: number) {
		if (!isNumber(value)) return '0 $';

		const string = Math.round(value).toString();
		const separator = ' ';

		return string
			.replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, `$1${separator}`)
			.concat(' $');
	}

	materials(value: number) {
		if (!isNumber(value)) return '0 mat.';

		const string = Math.round(value).toString();
		const separator = ' ';

		return string
			.replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, `$1${separator}`)
			.concat(' mat.');
	}

	phoneNumber(value: string) {
		if (!isString(value)) return '';

		const str = value.replace(/[^0-9]/gim, '');
		const numberChunks = str.match(/.{1,3}/g);

		if (numberChunks) return numberChunks.join(' ');

		return '';
	}
}

export default new Prettify();
