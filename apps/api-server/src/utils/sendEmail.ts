import nodemailer from 'nodemailer';

import { QQ_EMAIL_USER, QQ_EMAIL_PASS } from '@/config/config.secret';

class SendEmail {
	from: any;

	to: any;

	subject: any;

	text: any;

	html: any;

	constructor(payload) {
		this.from = payload.from;
		this.to = payload.to;
		this.subject = payload.subject;
		this.text = payload.text;
		this.html = payload.html;
	}

	send() {
		return new Promise((resolve, reject) => {
			const transporter = nodemailer.createTransport({
				// host: 'smtp.ethereal.email', // QQ邮箱的SMTP地址
				service: 'qq', // 使用了内置传输发送邮件 查看支持列表：https://nodemailer.com/smtp/well-known/
				port: 465, // SMTP 端口
				secureConnection: true, // 使用了 SSL
				auth: {
					user: QQ_EMAIL_USER,
					pass: QQ_EMAIL_PASS, // 这里密码不是qq密码，是你设置的smtp授权码
				},
			});

			const mailOptions = {
				from: this.from, // sender address
				to: this.to, // list of receivers
				subject: this.subject, // Subject line
				text: this.text, // plain text body
				html: this.html, // html body
			};

			// send mail with defined transport object
			transporter.sendMail(mailOptions, (error, info) => {
				if (error) {
					reject(error);
				} else {
					resolve(info);
				}
			});
		});
	}
}

export default SendEmail;
