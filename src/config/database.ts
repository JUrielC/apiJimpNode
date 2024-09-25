import {DataSource}  from 'typeorm'
import { User } from '../entities/users'
import { Image} from '../entities/images'
require('dotenv').config({ path: './../apiJimpNode/.env' })
export const AppDataSource = new DataSource({
    type: 'mysql',
    host: process.env.HOST,
    port: Number(process.env.PORT),
    username: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    entities: [User, Image],
    synchronize: false, 
})