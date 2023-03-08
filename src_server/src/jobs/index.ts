import logger from 'utils/logger';
import JobModel from 'models/Job';
import { jobs } from './job';
import './building';
import './waterfront';
import './postal';
import './car-theft';
import './smuggling';
// import './cash-collector';

export async function loadJobs() {
	const cursor = await JobModel.find().lean().cursor();

	cursor.on('data', (data: JobModel) => {
		const job = jobs[data.name];
		if (job) job.loadPoints(data.checkpoints);
	});

	cursor.on('close', () => logger.success(`Jobs loaded: ${Object.keys(jobs).length}`));
}

export function finishWork(player: Player) {
	const { job } = player;
	if (jobs[job?.name]) jobs[job.name].dismiss(player);
}

function startWork(player: Player, name: string, level: number) {
	const job = jobs[name];
	if (job) return job.startWork(player, level);
}

function showMenu(player: Player, name: string) {
	const job = jobs[name];
	if (job) job.onKeyPress(player);
}

mp.events.subscribe({
	'Jobs-StartWork': startWork,
	'Jobs-FinishWork': finishWork,
	'Jobs-ShowMenu': showMenu
});
