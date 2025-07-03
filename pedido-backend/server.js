require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const rutasPedidos = require('./Routes/order.routes');

const app = express();

// Middleware
app.use(express.json());

// Montar rutas
app.use('/api/pedidos', rutasPedidos);

// Ruta de prueba
app.get('/', (req, res) => {
  res.send('API funcionando correctamente');
});

// Conexión a MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('Conectado a MongoDB');
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`Servidor corriendo en http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Error al conectar con MongoDB:', err);
  });
