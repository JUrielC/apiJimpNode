import { verifyToken } from './generate_token';

interface TokenPayload {
    id_user: number; 
}

export const idUserByToken = async (token: string) => {
    try {
        const token_data = await verifyToken(token) as TokenPayload;
        
        return token_data.id_user;
    } catch (error) {
        console.error('Error al verificar el token:', error);
        return null; 
    }
};
