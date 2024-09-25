import {Router} from 'express'
import { loginPost } from '../controllers/login_controller'

const routerLogin= Router()

routerLogin.post('/', loginPost)


export default routerLogin