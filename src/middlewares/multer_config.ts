import { Request } from "express"
import multer, { FileFilterCallback } from "multer"
import path from "path"

type DestinationCallback = (error: Error | null, destination: string) => void
type FileNameCallback = (error: Error | null, filename: string) => void

export const storage = multer.diskStorage({
    destination: function (_req, _file, cb: DestinationCallback) {
        cb(null, 'images_edit/')
    },
    filename: function (_req, file, cb: FileNameCallback) {
        let extension = path.extname(file.originalname)

         if (extension === ".jfif") {
            extension = ".jpg"
        } 

        cb(null, file.fieldname + '_' + Date.now() + extension /* path.extname(file.originalname) */)
        
    }
})

//Validación por extensión debido a que no todas las imagenes cuentan con MIME type. 
//Si la extensión fue cambiada, el endpoint lo rechazará igualmente, manejando el error
export function fileFilter(req: Request, file: Express.Multer.File, cb: FileFilterCallback) {

    const extension = path.extname(file.originalname)
    const validTypes = [
        '.jpeg',
        '.png',
        '.gif',
        '.bmp',
        '.jfif'
    ];
    if (validTypes.includes(extension) ) {
        cb(null, true);
    } else {
        cb(null, false);
    }

}