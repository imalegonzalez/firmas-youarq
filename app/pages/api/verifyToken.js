// pages/api/verifyToken.js

import { OAuth2Client } from 'google-auth-library';

const CLIENT_ID = '1075870409238-ke2bjjjnq4ch32p5j2kdmf28djjip3g3.apps.googleusercontent.com.apps.googleusercontent.com';
const client = new OAuth2Client(CLIENT_ID);

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).end(); // Método no permitido.
    }

    const token = req.body.idToken;

    try {
        const ticket = await client.verifyIdToken({
            idToken: token,
            audience: CLIENT_ID,
        });
        
        const payload = ticket.getPayload();
        // Puedes usar la información del payload según lo necesites.
        
        res.status(200).json({ success: true, user: payload });

    } catch (error) {
        console.error("Error verificando el token: ", error);
        res.status(401).json({ success: false, message: 'Autenticación fallida' });
    }
}
