import { Request, Response, NextFunction } from 'express';
import { extractAndVerifyToken } from '../helpers/extract_token';

export const checkToken = async (req: Request, res: Response, next: NextFunction) => {
    try {
        if (!req.headers.authorization) {
            return res.status(401).json({
                message: "Token de sesión no encontrado"
            });
        }
        const tokenStatus = await extractAndVerifyToken(req.headers.authorization);

        if (tokenStatus === "Token expirado") {
            return res.status(401).json({
                message: tokenStatus +  '. Reinicie la sesión'
            });
        }
        if (!tokenStatus) {
            return res.status(401).json({
                message: "Token inválido"
            });
        }

        next();
    } catch (error) {
        return res.status(401).json({
            message: "Error al verificar el token de sesion"
        });
    }
};
