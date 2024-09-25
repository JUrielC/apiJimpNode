import { verifyToken } from './generate_token';

export const extractAndVerifyToken = async (authorizationHeader: string) => {
    if (!authorizationHeader || !authorizationHeader.startsWith('Bearer ')) {
        throw new Error('Token inválido');
    }

    const extractedToken = authorizationHeader.split(' ')[1];
    const tokenData = await verifyToken(extractedToken);

    if (!tokenData || tokenData === "Token expirado") {
        throw new Error(tokenData || 'Token inválido');
    }

    return tokenData;
};
