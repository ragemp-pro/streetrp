import express from 'express';
import donationController from './controllers/donation';

class Routes {
	private app: express.Application;

	constructor(app: express.Application) {
		this.app = app;
	}

	apply() {
		this.app.post('/api/donation', donationController.updateBalance);
		this.app.get('/api/players', (req, res) => {
			res.status(200).json({ players: mp.players.length });
		});
	}
}

export default Routes;
