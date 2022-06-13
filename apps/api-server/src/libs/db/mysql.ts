import { G } from '../global'
import { createPool, format } from 'mysql2'

class MySQLClient {
	id: string
	client: any
	isLogTransaction: boolean
	constructor(client, isLogTransaction = false) {
		this.id = (String(Math.random()) + '0000000000').slice(2, 12);
		this.client = client
		this.isLogTransaction = isLogTransaction
	}

	format(...args) {
		return format.apply(this, arguments)
	}

	async query(...args) {
		const sql = this.format.apply(this, arguments)

		return new Promise((resolve, reject) => {
			this.client.query(sql, (err, result) => err ? reject(err) : resolve(result))
		});
	}
	async queryOne(...args){ return (await this.query.apply(this, arguments))[0]; }

	async begin() {
		return new Promise((resolve, reject) => {
			if(this.isLogTransaction) {
				G.info('数据', '开启~[事务]', `~{${this.id}}`)
			}

			this.client.beginTransaction((error, result) => {
				if(error) {
					if(this.isLogTransaction) {
						G.error('数据', '开启~[事务]', `~{${this.id}} 错误`, error)
					}

					reject(error)
				}
				else {
					resolve(result)
				}
			});
		});
	}
	async commit() {
		return new Promise((resolve, reject) => {
			if(this.isLogTransaction) {
				G.info('数据', '提交~[事务]', `~{${this.id}}`)
			}

			this.client.commit((error, result) => {
				if(error) {
					if(this.isLogTransaction) {
						G.error('数据', '提交~[事务]', `~{${this.id}} 错误`, error)
					}

					reject(error)
				}
				else {
					resolve(result)
				}
			})
		})
	}
	async rollback() {
		return new Promise((resolve, reject) => {
			if(this.isLogTransaction) {
				G.info('数据', '回滚~[事务]', `~{${this.id}}`)
			}

			this.client.commit((error, result) => {
				if(error) {
					if(this.isLogTransaction) {
						G.error('数据', '回滚~[事务]', `~{${this.id}} 错误`, error)
					}

					reject(error)
				}
				else {
					resolve(result)
				}
			});
		});
	}

	close() { return this.client.release() }
}

class MySQL {
	pool: any
	isLogTransaction: boolean
	constructor(auth, isLogTransaction = false) {
		this.pool = createPool(auth)
		this.isLogTransaction = isLogTransaction

		this.query('SHOW VARIABLES LIKE "character_set_client"')
			.then(result => {
				G.debug('数据', '连接', `✔ 客户端编码~{${result[0].Value}}`)
			});
	}

	format(...args) { return format.apply(this, arguments) }

	async pick() {
		const connection = await new Promise((resolve, reject) => {
			this.pool.getConnection((error, result) => error ? reject(error) : resolve(result))
		});

		return new MySQLClient(connection, this.isLogTransaction);
	}

	async query(...args) {
		const sql = this.format.apply(this, arguments);

		return new Promise((resolve, reject) => {
			this.pool.query(sql, (error, result) => error ? reject(error) : resolve(result));
		});
	}
	async queryOne(...args) { return (await this.query.apply(this, arguments))[0]; }
}

export default MySQL