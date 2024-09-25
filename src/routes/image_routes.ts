import {postImageRezise} from '../controllers/img_controller'
import {Router} from 'express'
import multer from 'multer'
import { storage, fileFilter } from '../middlewares/multer_config'
import multerErrorHandler from '../middlewares/multer_error_handler';
import { errorHandler } from '../middlewares/unexpected_error_handler';
import { checkToken } from '../middlewares/check_token';

const upload = multer({storage:storage, fileFilter:fileFilter})
const routerImages = Router()


routerImages.post ('/resize',checkToken, upload.single('image'), postImageRezise)


routerImages.use(multerErrorHandler);
routerImages.use(errorHandler);


export default routerImages