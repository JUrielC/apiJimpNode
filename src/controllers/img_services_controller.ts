import { Request, Response } from "express"
import { extractAndVerifyToken } from '../helpers/extract_token';
import { TokenPayload } from "../types/interfaces";
//import { Image } from "../entities/images";

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

        //const image_database = new Image()



    } catch (error) {
        return res.status(500).json({
            message: error instanceof Error ? "Error al obtener la información" + error.message
                : "Interal Server Error",
        });
    }
}