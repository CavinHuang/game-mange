
import Koa from 'koa'

import Compress from 'koa-compress'
import { constants } from 'zlib'

import bodyParser from 'koa-bodyparser'

import Cors from '@koa/cors'
import Helmet from 'koa-helmet' // 网络安全
import Favicon from 'koa-favicon' // 页面logo加载


import { createServer } from 'http'
import { createSecureServer, Http2ServerRequest, Http2ServerResponse } from 'http2'

import { join, resolve } from 'path'
import { readFileSync } from 'fs'


interface Config {
	name: string;
	server: {
		host: string;
		port: number;
	};
	crypto: {
		sign: string;
		iv: string;
	};
	favicon: string
	// http2: any;
	logger: any;
}

export class Server {
	private C;
	private http2: ((request: Http2ServerRequest, response: Http2ServerResponse) => void) | undefined;
	private server;
	private koa: Koa;
	logTrace: { (): void; (...params: any[]): any; (...params: any[]): any }
	logDebug: { (): void; (...params: any[]): any; (...params: any[]): any }
	logInfo: { (): void; (...params: any[]): any; (...params: any[]): any }
	logWarn: { (): void; (...params: any[]): any; (...params: any[]): any }
	logError: { (): void; (...params: any[]): any; (...params: any[]): any }
	logMark: { (): void; (...params: any[]): any; (...params: any[]): any }
	logFatal: { (): void; (...params: any[]): any; (...params: any[]): any }
	harb: any
	constructor(C: Config) {
		if (!C) { throw TypeError('缺少 [服务器配置]{C}'); }

		/**
		 * 服务器配置
		 * @type {ServerConfig}
		 */
		this.C = C;

		this.initLogger();
		// this.initHTTP2();

		this.koa = new Koa();
		this.server = this.http2 ? createSecureServer(this.http2) : createServer(this.koa.callback());

		this.init().then(() => {
			this.start();
		}).catch(err => {
			this.logFatal(err);
		});
	}

	private async init() {
		this.initHeader();
		this.initFavIcon();

		await this.initHarbour();
		await this.initServer();
	}

	/** 服务器协议头 */
	get protocol() { return this.http2 ? 'http2' : 'http'; }
	/** 用于日志记录的服务器名称 */
	get nameLog() { return typeof this.C.name == 'string' ? this.C.name : 'Server'; }

	/** 启动服务器 */
	async start() {
		const { C: { name, server: { host, port } }, server, logInfo, logFatal } = this;
		try {
			// 监听端口
			server.listen(port, host, () => {
				logInfo(`监听~{${this.protocol}://${host == '0.0.0.0' ? 'localhost' : host}:${port}}`, `✔ `);
			});
		}
		catch (error) {
			logFatal(`监听~{${this.protocol}://${host}:${port}}`, error);
		}
	}

	/** 加载HTTPS2配置 */
	// initHTTP2() {
	// 	const { C: { http2 } } = this;

	// 	if (!http2 || http2.disable) { return false; }

	// 	const config = {
	// 		allowHTTP1: http2.http1,
	// 		key: http2.key,
	// 		pem: http2.pem,
	// 	};

	// 	if (typeof config.key == 'string') { config.key = readFileSync(config.key); }
	// 	if (typeof config.pem == 'string') { config.pem = readFileSync(config.pem); }

	// 	this.http2 = config;
	// }

	/** 加载通用请求头 */
	async initHeader() {
		const koa = this.koa;

		koa.use(async (ctx, next) => {
			ctx.set('Access-Control-Allow-Origin', '*');
			ctx.set(
				'Access-Control-Allow-Headers',
				'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild'
			);
			ctx.set('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
			if (ctx.method === 'OPTIONS') {
				ctx.body = 200;
			} else {
				await next();
			}
		});


		// 这个bodyParser有个问题，如果前端传的数据有误，经过这个中间件解析的时候，解析到错误了，还是会继续next()。
		koa.use(
			bodyParser({
				onerror: (error, ctx) => {
					console.log('bodyParser解析错误', error);
					ctx.status = 400;
					ctx.res.end('bodyParser解析错误');
				},
			})
		); // 注意顺序，需要在所有路由加载前解析

		// zlib压缩
		koa.use(Compress({
			threshold: 2048,
			gzip: { flush: constants.Z_SYNC_FLUSH },
			deflate: { flush: constants.Z_SYNC_FLUSH },
		}));

		// cors请求头
		koa.use(Cors());



		// hsts请求头
		koa.use(Helmet.contentSecurityPolicy({
			directives: {
				defaultSrc: ['\'self\'', '\'unsafe-inline\'', '\'unsafe-eval\''],
				objectSrc: ['\'none\''],
				scriptSrc: ['\'self\'', '\'unsafe-inline\'', '\'unsafe-eval\''],
				styleSrc: ['\'self\'', 'https:', '\'unsafe-inline\''],
				imgSrc: ['\'self\'', 'https:', 'data:', 'blob:', 'mediastream:', 'filesystem:'],
				fontSrc: ['\'self\'', 'https:', 'data:', 'blob:', 'mediastream:', 'filesystem:'],
			},
		}));
		koa.use(Helmet.expectCt());
		koa.use(Helmet.frameguard());
		koa.use(Helmet.hidePoweredBy());
		koa.use(Helmet.hsts());
		koa.use(Helmet.ieNoOpen());
		koa.use(Helmet.noSniff());
		koa.use(Helmet.permittedCrossDomainPolicies());
		koa.use(Helmet.referrerPolicy());
		koa.use(Helmet.xssFilter());
	}

	/** 加载FavIcon */
	initFavIcon() {
		const { C: { favicon }, koa, logInfo } = this;

		if (favicon && typeof favicon == 'string') {
			koa.use(Favicon(favicon));

			logInfo('加载~[Favicon]', `~[文件路径]~{${favicon}}`);
		}
	}

	async initHarbour() {
		const { C: { harb }, logInfo, logFatal } = this;

		try {
			this.harb = await(await import('./server-harb-default')).default(this);
			logInfo('加载~[港湾]', '✔ ');
		}
		catch (error) {
			logFatal('加载~[港湾]', error);
		}
	}

	/**
	 * 加载服务器
	 * @async
	 */
	async initServer() {

		const { C: { server: { host, port } }, server, koa, logInfo, logFatal } = this;

		// 监听请求
		server.on('request', koa.callback());

		// 监听错误
		server.on('error',  (error) => {
			if (error.code == 'EADDRINUSE') {
				logInfo(`监听~{${this.protocol}://${host}:${port}}`, '✖ 端口已被占用');
			}
			else {
				logFatal('发生~[错误]', error);
			}

			process.exit();
		});
	}

	/** 加载日志函数 */
	initLogger() {
		const { C: { logger } } = this;
		// 关闭日志
		if(logger === false) {
			this.logTrace = () => { };
			this.logDebug = () => { };
			this.logInfo = () => { };
			this.logError = () => { };
			this.logWarn = () => { };
			this.logFatal = () => { };
			this.logMark = () => { };
		}
		// 单一日志
		else if(typeof logger == 'function') {
			this.logTrace = (...params) => logger(this.nameLog, ...params);
			this.logDebug = (...params) => logger(this.nameLog, ...params);
			this.logInfo = (...params) => logger(this.nameLog, ...params);
			this.logError = (...params) => logger(this.nameLog, ...params);
			this.logWarn = (...params) => logger(this.nameLog, ...params);
			this.logFatal = (...params) => logger(this.nameLog, ...params);
			this.logMark = (...params) => logger(this.nameLog, ...params);
		}
		// 分级日志
		else {

			const csl = console;

			this.logTrace =
				typeof logger?.trace == 'function' ?
					(...params) => logger.trace(this.nameLog, ...params) :
					(
						typeof csl.trace == 'function' ?
							(...params) => csl.trace(this.nameLog, ...params) :
							(...params) => csl.log(this.nameLog, ...params)
					);
			this.logDebug =
				typeof logger?.debug == 'function' ?
					(...params) => logger.debug(this.nameLog, ...params) :
					(
						typeof csl.debug == 'function' ?
							(...params) => csl.debug(this.nameLog, ...params) :
							(...params) => csl.log(this.nameLog, ...params)
					);
			this.logInfo =
				typeof logger?.info == 'function' ?
					(...params) => logger.info(this.nameLog, ...params) :
					(
						typeof csl.info == 'function' ?
							(...params) => csl.info(this.nameLog, ...params) :
							(...params) => csl.log(this.nameLog, ...params)
					);
			this.logError =
				typeof logger?.error == 'function' ?
					(...params) => logger.error(this.nameLog, ...params) :
					(
						typeof csl.error == 'function' ?
							(...params) => csl.error(this.nameLog, ...params) :
							(...params) => csl.log(this.nameLog, ...params)
					);
			this.logWarn =
				typeof logger?.warn == 'function' ?
					(...params) => logger.warn(this.nameLog, ...params) :
					(
						typeof csl.warn == 'function' ?
							(...params) => csl.warn(this.nameLog, ...params) :
							(...params) => csl.log(this.nameLog, ...params)
					);
			this.logFatal =
				typeof logger?.fatal == 'function' ?
					(...params) => logger.fatal(this.nameLog, ...params) :
					(
						typeof csl.error == 'function' ?
							(...params) => csl.error(this.nameLog, ...params) :
							(...params) => csl.log(this.nameLog, ...params)
					);
			this.logMark =
				typeof logger?.mark == 'function' ?
					(...params) => logger.mark(this.nameLog, ...params) :
					(
						typeof csl.info == 'function' ?
							(...params) => csl.info(this.nameLog, ...params) :
							(...params) => csl.log(this.nameLog, ...params)
					);
		}
	}
}