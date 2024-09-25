import { postImageRezise, postImageRotate } from '../controllers/img_controller'
import { Router } from 'express'
import multer from 'multer'
import { storage, fileFilter } from '../middlewares/multer_config'
import multerErrorHandler from '../middlewares/multer_error_handler';
import { errorHandler } from '../middlewares/unexpected_error_handler';
import { checkToken } from '../middlewares/check_token';
import { body } from 'express-validator';

const upload = multer({ storage: storage, fileFilter: fileFilter })
const routerImages = Router()


routerImages.post('/resize', checkToken, upload.single('image'),
    [
        body('width').optional().isNumeric(),
        body('height').optional().isNumeric(),
    ],
    postImageRezise)

    routerImages.post('/rotate', checkToken, upload.single('image'),
    [
        body('rotate').isNumeric(),
    ],
    postImageRotate)


routerImages.use(multerErrorHandler);
routerImages.use(errorHandler);


export default routerImages