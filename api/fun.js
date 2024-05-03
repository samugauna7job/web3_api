import axios from "axios";
import config from "./config.js";
// Función para obtener información de cadenas desde la API
async function postFirstContract() {
    try {
        const response = await axios.post(config.apiUrl, { headers: config.headers });
        return response.data;
    } catch (error) {
        console.error('Error al obtener información de cadenas:', error);
        throw error;
    }
}

export {postFirstContract}