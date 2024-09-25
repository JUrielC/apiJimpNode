import { Request, Response, NextFunction } from 'express';
import { extractAndVerifyToken } from '../helpers/extract_token';

export const checkToken = async (req: Request, res: Response, next: NextFunction) => {
    try {
        if(!req.headers.authorization){
            return res.status(401).json({
                message: "Token de sesión no encontrado"
            });
        }
        const token_data = await extractAndVerifyToken(req.headers.authorization);
        console.log(token_data);
        next();
    } catch (error) {
        return res.status(401).json({
            message: "Error al verificar el token de sesion"
        });
    }
};
