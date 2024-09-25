import {Router} from 'express'
import { getImages } from '../controllers/img_services_controller'
import { errorHandler } from '../middlewares/unexpected_error_handler';
import { checkToken } from '../middlewares/check_token';
import multerErrorHandler from '../middlewares/multer_error_handler';

const routerImagesServices = Router()

routerImagesServices.get('',checkToken, getImages )

routerImagesServices.use(multerErrorHandler);
routerImagesServices.use(errorHandler);

export default routerImagesServices