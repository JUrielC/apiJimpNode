import { Request, Response } from 'express';
//import { getRepository } from 'typeorm';
import { User } from '../entities/users';
import { tokenSign } from '../helpers/generate_token';
import bcrypt from 'bcrypt';

export const loginPost = async (req: Request, res: Response) => {
    try {
        const { userName, password } = req.body;

        //User
        //const userRepository = getRepository(User);
        const user = await User.findOne({ where: { userName } });

        if (!user) {
            return res.status(404).json({ message: 'Usuario no registrado' });
        }

        //Password
        const passwordValid = await bcrypt.compare(password, user.password);
        if (!passwordValid) {
            return res.status(401).json({ message: 'Contraseña incorrecta' });
        }

        //Token
        const token = await tokenSign(user.id);

        return res.status(200).json({
            message: "Login exitoso",
            token: token
        });
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: "Internal Server Eror"
        })
    }
};
