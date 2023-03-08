import { Request, Response } from 'express';
import money from 'helpers/money';

class DonationController {
	updateBalance(req: Request, res: Response) {
		const { userId, balance } = req.body;

		const player = mp.players.toCustomArray().find((item) => item.account === userId);
		if (player) money.updatePlayer(player, { points: balance }); // отправить фулл объект денег, банк и тд

		res.status(200).end();
	}
}

export default new DonationController();
