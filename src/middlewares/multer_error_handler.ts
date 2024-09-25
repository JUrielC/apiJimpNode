// helpers/multerErrorHandler.ts
import { Request, Response, NextFunction } from 'express';
import { MulterError } from 'multer';

const multerErrorHandler = (err: MulterError, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof MulterError) {
        return res.status(400).json({
            message: 'Error al subir el archivo: ' + err.message + '. ' + err.code,
            code: err.code,
        });
    }
    next(err);
};

export default multerErrorHandler;