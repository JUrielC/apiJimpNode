import { Request, Response } from "express"
import { extractAndVerifyToken } from '../helpers/extract_token';
import { TokenPayload } from "../types/interfaces";
import { Image } from "../entities/images";

export const getImages = async (req: Request, res: Response) => {
    try {

        //Extracción el id de user a partir del token
        if (!req.headers.authorization) {
            return res.status(401).json({
                message: "Token de sesión no encontrado"
            });
        }
        const token_data = await extractAndVerifyToken(req.headers.authorization) as TokenPayload
        const idUser = token_data.id_user
        console.log(idUser)

        const count = await Image.count({ where: { user: { id: parseInt(idUser) } } })
        if (count === 0) {
            console.log('No se encontraron imágenes para el usuario con id:');
            return res.json({
                message: "Aún no hay imágenes editadas por tu usuario"
            }); 
        }
 
        //Get a la base de datos de las imágenes editadas por el usuario actual
        const images = await Image.findBy({ user: { id: parseInt(idUser) } });
       

        return res.json(images)


    } catch (error) {
        return res.status(500).json({
            message: error instanceof Error ? "Error al obtener la información. " + error.message
                : "Interal Server Error",
        });
    }
}