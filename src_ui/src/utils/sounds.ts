import bankSound from 'assets/audio/bank-pay.mp3';
import cashSound from 'assets/audio/cash-pay.mp3';

class Sounds {
	playPayment(type: 'bank' | 'cash') {
		new Audio(type === 'bank' ? bankSound : cashSound).play();
	}
}

export default new Sounds();
