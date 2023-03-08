import express from 'express';
import path from 'path';
import logger from 'utils/logger';
import Routes from './routes';

const STATIC = path.resolve('client_packages', 'cef');

class API {
	private app: express.Application;

	private port: number;

	constructor() {
		this.app = express();
		this.port = parseInt(process.env.API_PORT, 10) || 8000;
	}

	init() {
		this.configure();

		this.app.listen(this.port, () => {
			logger.success(`Web API running on ${this.port} port.`);
		});
	}

	private configure() {
		this.app.use(express.json());
    this.app.use(express.static(STATIC));

    this.app.get('*', (req, res) => {
      res.sendFile(path.resolve(STATIC, 'index.html'));
    });

		new Routes(this.app).apply();
	}
}

export default API;
