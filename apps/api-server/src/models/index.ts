import "reflect-metadata";
import { createConnection, EntityTarget, getManager } from "typeorm"

export function typeOrm(callback) {
  createConnection({
    type: "mariadb",
    host: "localhost",
    port: 3306,
    username: "cavin",
    password: "123456",
    database: "game-mange",
    entities: [__dirname + "/entity/*.ts"],
    migrations: [__dirname + "/migration/*.ts"],
    subscribers: [__dirname + "/subscriber/*.ts"],
    synchronize: true,
    logging: false
  })
  .then(connection => {
    // 这里可以写实体操作相关的代码
    callback && callback(connection)
  })
  .catch(error => console.log(error));
}

/**
 * model repository
 */
export function M<T = any>(entity: EntityTarget<T>) {
  return getManager().getRepository<T>(entity)
}