import nodemailer from 'nodemailer';
import logger from './logger';

class Mailer {
	private transporter: nodemailer.Transporter;

	send(email: string, subject: string, text: string) {
		const mail = {
			subject,
			text,
			from: process.env.MAIL_USER,
			to: `${email}`
		};

		this.transporter.sendMail(mail);
	}

	init() {
		this.transporter = nodemailer.createTransport({
			service: 'gmail',
			host: 'smtp.gmail.com',
			auth: {
				user: process.env.MAIL_USER,
				pass: process.env.MAIL_PASS
			}
		});

		this.transporter.verify((error) => {
			if (error) console.error(error);
			else logger.success('Email server ready.');
		});
	}
}
const mailer = new Mailer();

export default mailer;
