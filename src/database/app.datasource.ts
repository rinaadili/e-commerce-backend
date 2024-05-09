import {DataSource} from "typeorm";
import {dbVariables} from './database.config';
export const AppDataSource = new DataSource(dbVariables);