import 'dotenv/config'
import {DataSourceOptions} from 'typeorm'
const {DB_HOST, DB_NAME, DB_PORT, DB_PASSWORD, DB_USERNAME} = process.env

export const dbVariables: DataSourceOptions = {
    type: 'postgres',
    host: DB_HOST,
    username: DB_USERNAME,
    password: DB_PASSWORD as string,
    port: DB_PORT as number | undefined | 3306,
    database: DB_NAME,
    entities: [],
    synchronize: true,
}
