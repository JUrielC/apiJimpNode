import { Request, Response, NextFunction } from 'express';

export const validateFile = (req: Request, res: Response, next: NextFunction) => {
    const file = req.file;

    if (!file) {
        console.log(req.file)
        return res.status(400).json({ message: 'Validación de archivos: No se ha cargado ninguna imagen' });
    }
    console.log(file.mimetype)
    const validTypes = ['image/bmp', 'image/gif', 'image/jpeg', 'image/png', 'image/tiff'];

    if (!validTypes.includes(file.mimetype)) {
        console.log("no valid file")
        return res.status(400).json({
            message: 'Formato no válido. Los formatos aceptados son: jpeg, jpg, bpm, gif, png y tiff'
        });
    }

    next();
};