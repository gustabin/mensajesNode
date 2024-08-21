const express = require('express');
const dotenv = require('dotenv');

// Cargar las variables de entorno desde el archivo .env
dotenv.config();

const app = express();

// Usar la variable de entorno para el puerto
const PORT = process.env.PORT || 3000;

// Ruta principal
app.get('/', (req, res) => {
    res.send(`El servidor está ejecutándose en el puerto ${PORT}`);
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
