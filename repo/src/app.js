const express = require('express');
const axios = require('axios');

const app = express();

// Ruta principal
app.get('/', (req, res) => {
    res.send('Ejercicio prueba 2 por Gabriel Grobier - se hace 0 cambios para subir');
});

// Ruta para obtener datos de una API externa
app.get('/api', async (req, res) => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
        res.json(response.data);
    } catch (error) {
        res.status(500).send('Error al obtener datos de la API externa');
    }
});

// Ruta de health check
app.get('/health', (req, res) => {
    res.send('Si ves esto, el servicio está OK');
});

// Configuración del puerto y arranque del servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en el puerto ${PORT}`);
});

module.exports = app;
