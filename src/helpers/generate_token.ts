//import { log } from 'console';
import jwt from 'jsonwebtoken';
require('dotenv').config({path: './../apiJimpNode/.env'});

const secret =  process.env.JWT_SECRET ? process.env.JWT_SECRET : "62048"

//generar un token
export const tokenSign = async (user:number) =>{
    return jwt.sign(
        {
        id_user: user,
        },
            secret,
        {
            expiresIn: "30s"
        }
    ) 
}

//verificar token
export const verifyToken = async (token:string) => {
    try {
        return jwt.verify(token, secret);
    } 
    catch (error) {
        if (error instanceof jwt.TokenExpiredError) {
            return "Token expirado";
        } else {
            return null;
        }
    }
};

