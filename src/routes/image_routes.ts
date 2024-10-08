import { postImageRezise, postImageRotate, postImageFishEye } from '../controllers/img_controller'
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
        body('width').optional().isInt(),
        body('height').optional().isInt(),
    ],
    postImageRezise)

routerImages.post('/rotate', checkToken, upload.single('image'),
    [
        body('rotate').isInt(),
    ],
    postImageRotate)

routerImages.post('/fisheye', checkToken, upload.single('image'),postImageFishEye)

routerImages.use(multerErrorHandler);
routerImages.use(errorHandler);


export default routerImages