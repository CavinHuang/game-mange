import * as Crypto from 'crypto';
import fs from 'fs';


const cryptoPassword = (pwd: string, key: string) => {
	return Crypto.createHmac('sha256', key).update(pwd).digest('hex');
}

/**
 * md5 加密
 * @param {string} str 明文
 */
const calcString = (str: string) => {
	const hash = Crypto.createHash('md5')
	return hash.update(str).digest('hex').toUpperCase();
}

const calcFile = (path: string) => {
	return new Promise(function (resolve) {
		const hash = Crypto.createHash('md5');
		const readStream = fs.createReadStream(path);

		readStream.on('data', hash.update.bind(hash));
		readStream.on('end', function () {
			resolve(hash.digest('hex').toUpperCase());
		});
	});
};

/**
 * 加密方法
 * @param {string} content 明文
 */
const doCrypto = (content: string, key: string) => {
	const str = `password=${content}&key=${key}`
	return calcString(str)
}

export {
	cryptoPassword,
	calcString,
	calcFile,
	doCrypto
}