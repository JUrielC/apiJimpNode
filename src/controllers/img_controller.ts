import { Request, Response } from "express"
import { Jimp } from "jimp";
import path from 'node:path'
import { extractAndVerifyToken } from '../helpers/extract_token';
import { Image } from "../entities/images";
import { User } from "../entities/users";
import { TokenPayload } from "../types/interfaces";
import { validationResult } from 'express-validator';

export const postImageRezise = async (req: Request, res: Response) => {
    try {

        //Extracción el id de user a partir del token
        if (!req.headers.authorization) {
            return res.status(401).json({
                message: "Token de sesión no encontrado"
            });
        }
        const token_data = await extractAndVerifyToken(req.headers.authorization) as TokenPayload
        const idUser = token_data.id_user

        //Obtener parametros del body
        const image = req.file
        const { width, height }: { width?: string, height?: string } = req.body;

        //validacion expresss validator
        const validation_error = validationResult(req);
        if (!validation_error.isEmpty()) {
            return res.status(400).json({
                message: "La solicitud no cuenta con los parámetros correctos"
            })
        }

        //2do Filtro 
        if (!image) {
            return res.status(400).json({
                message: "No se ha cargado ninguna imagen válida. Verifique el formato del archivo: png, jpeg, gif o jfif"
            })
        }


        //Configurar parametros para Jimp
        const imageJimp = await Jimp.read(image.path);
        const newWidth = width ? Number(width) : imageJimp.width;
        const newHeight = height ? Number(height) : imageJimp.height;
        const dir = `images_edit/${image.filename}` as `${string}.${string}`;

        //Resize
        await imageJimp.resize({ w: newWidth, h: newHeight });
        await imageJimp.write(dir)

        //Post en database
        const imageDatabase = new Image()
        const userDatabase = await User.findOneBy({ id: parseInt(idUser) })
        imageDatabase.nameImage = image.filename
        imageDatabase.urlImage = path.resolve(__dirname, `../../${dir}`)

        if (!userDatabase) {
            res.status(404).json({
                message: "Usuario no encontrado"
            })
        } else {
            imageDatabase.user = userDatabase
            imageDatabase.save()
        }

        return res.sendFile(path.resolve(__dirname, `../../${dir}`))

    } catch (error) {
        return res.status(500).json({
            message: error instanceof Error ? "Error al procesar la imagen: "
                : "Interal Server Error",
        });
    }
}



export const postImageRotate = async (req: Request, res: Response) => {
    try {

        //Extracción el id de user a partir del token
        if (!req.headers.authorization) {
            return res.status(401).json({
                message: "Token de sesión no encontrado"
            });
        }
        const token_data = await extractAndVerifyToken(req.headers.authorization) as TokenPayload
        const idUser = token_data.id_user

        const image = req.file
        const rotate = req.body.rotate;

        //validacion expresss validator
        const validation_error = validationResult(req);
        if (!validation_error.isEmpty()) {
            return res.status(400).json({
                message: "La solicitud no cuenta con los parámetros correctos"
            })
        }

        //2do Filtro 
        if (!image) {
            return res.status(400).json({
                message: "No se ha cargado ninguna imagen válida. Verifique el formato del archivo: png, jpeg, gif o jfif"
            })
        }


        //Configurar parametros para Jimp
        const imageJimp = await Jimp.read(image.path);
        const dir = `images_edit/${image.filename}` as `${string}.${string}`;

        //rotate
        await imageJimp.rotate(parseInt(rotate));
        await imageJimp.write(dir)

        //Post en database
        const imageDatabase = new Image()
        const userDatabase = await User.findOneBy({ id: parseInt(idUser) })
        imageDatabase.nameImage = image.filename
        imageDatabase.urlImage = path.resolve(__dirname, `../../${dir}`)

        if (!userDatabase) {
            res.status(404).json({
                message: "Usuario no encontrado"
            })
        } else {
            imageDatabase.user = userDatabase
            imageDatabase.save()
        }

        return res.sendFile(path.resolve(__dirname, `../../${dir}`))

    } catch (error) {
        console.log(error)
        return res.status(500).json({
            message: error instanceof Error ? "Error al procesar la imagen: "
                : "Interal Server Error",
        });
    }
}