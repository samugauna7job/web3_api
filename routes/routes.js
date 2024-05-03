import { Router } from "express";
import { postFirstContract } from "../api/fun.js";
const router = Router()

router.post('/contract', async (req, res) => {
    try {
        const chainInfo = await postFirstContract();
        res.json(chainInfo);
    } catch (error) {
        console.error('Error al obtener información de cadenas:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
})

export default router