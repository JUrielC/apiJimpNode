import "reflect-metadata"
import { AppDataSource } from "./config/database"
import express from 'express'
import routerImages from './routes/image_routes'
import routerLogin from './routes/login_routes'
import cors from 'cors'
require('dotenv').config({ path: '../apiJimpNode/.env' })


const app = express()
app.use(cors())
app.use(express.json())

app.use('/image', routerImages)
app.use('/login', routerLogin)


async function main() {
    try {
        await AppDataSource.initialize()
        console.log('Databse connected')
        app.listen(process.env.NODE_PORT)
        console.log('Server running on port ' + process.env.NODE_PORT)

    } catch (error) {
        console.log(error)
    }
}

main()
