import { createClient } from 'redis';

import { REDIS_CONFIG } from '../config/config.secret'

import { G } from './global';

const redisClient = createClient({
	socket: {
		port: REDIS_CONFIG.socket.port,
		host: REDIS_CONFIG.socket.host,
	},
	password: REDIS_CONFIG.password,
});

export const connectRedis = async () => {
	redisClient.on('error', (err) => {
		G.error('', 'Redis Client Error');
	});

	try {
		G.info(
			'', `开始连接${REDIS_CONFIG.socket.host}:${REDIS_CONFIG.socket.port}服务器的redis...`
		)
		await redisClient.connect();
		G.debug('', `连接${REDIS_CONFIG.socket.host}:${REDIS_CONFIG.socket.port}服务器的redis成功!`)
	} catch (error) {
		G.error(
			'', `连接${REDIS_CONFIG.socket.host}:${REDIS_CONFIG.socket.port}服务器的redis失败!`
		)
	}
};

export default redisClient;
