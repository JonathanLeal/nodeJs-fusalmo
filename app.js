// Importa Express
const express = require('express');

// Crea una instancia de Express
const app = express();

// Ruta de inicio
app.get('/', (req, res) => {
  res.send('¡Hola, mundo!');
});

// Inicia el servidor
const port = 3000;
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});