import { Request, Response } from "express"
import { Jimp } from "jimp";
import path from 'node:path'
 import { extractAndVerifyToken } from '../helpers/extract_token';
/*import { idUserByToken } from "../helpers/return_id_user"; */

interface TokenPayload {
    id_user: string; 
}

export const postImageRezise = async (req: Request, res: Response) => {
    try {
        const image = req.file
        if(!req.headers.authorization){
            return res.status(401).json({
                message: "Token de sesión no encontrado"
            });
        }
        const token_data  = await extractAndVerifyToken(req.headers.authorization) as TokenPayload
        const idUser = token_data.id_user
        console.log(idUser)
       /*  if(!req.headers.authorization){
            return res.status(401).json({
                message: "Token de sesión no encontrado"
            });
        }
        const token_data = await extractAndVerifyToken(req.headers.authorization) as string;
        */ 
        //2do Filtro 
        if (!image) {
            return res.status(400).json({
                message: "No se ha cargado ninguna imagen válida. Verifique el formato del archivo: png, jpeg, gif o jfif"
            })
        }

        const { width, height }: { width?: string, height?: string } = req.body;

        //Configurar parametros para Jimp
        const imageJimp = await Jimp.read(image.path);
        const newWidth = width ? Number(width) : imageJimp.width;
        const newHeight = height ? Number(height) : imageJimp.height;
        const dir = `images_edit/${image.filename}` as `${string}.${string}`;

        //Resize
        await imageJimp.resize({ w: newWidth, h: newHeight });
        await imageJimp.write(dir)
       
        return res.sendFile(path.resolve(__dirname, `../../${dir}`))

    } catch (error) {
        return res.status(500).json({
            message: error instanceof Error ? "Error al procesar la imagen: "+ error.message
            : "Error inesperado",
        });
    }
}