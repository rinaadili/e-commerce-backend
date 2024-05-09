import 'dotenv/config'
import app from './App'
import {AppDataSource} from "./database/app.datasource";

const {APP_PORT, APP_NAME} = process.env;

app.listen(APP_PORT, () => {
    console.log(`Server is running on port ${APP_PORT}`);

    AppDataSource.initialize().then(() => {
        console.log(`${APP_NAME} connected to database!`);
    }).catch(error => {
        console.log('Error connection to database');
        console.log(error);
    })
})