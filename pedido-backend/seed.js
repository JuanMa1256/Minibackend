require('dotenv').config();
const mongoose = require('mongoose');
const Order = require('./Models/orders');

const pedidosIniciales = [
  {
    Fechapedido: new Date(),
    estado: 'En Curso',
    cliente: 'Carlos López',
    total: 120,
    items: [
      { producto: 'Pan con queso', cantidad: 1, precio: 5 },
      { producto: 'Café', cantidad: 2, precio: 10 }
    ],
    tenantId: 'empresaA'
  },
  {
    Fechapedido: new Date(),
    estado: 'Cerrado',
    cliente: 'Ana Torres',
    total: 80,
    items: [
      { producto: 'Jugo de naranja', cantidad: 1, precio: 8 },
      { producto: 'Tarta', cantidad: 1, precio: 12 }
    ],
    tenantId: 'empresaB'
  }
];

mongoose.connect(process.env.MONGO_URI)
  .then(async () => {
    console.log('Conectado a MongoDB');
    
    await Order.deleteMany({});
    console.log('Colección limpiada');

    // Insertar pedidos
    const result = await Order.insertMany(pedidosIniciales);
    console.log('Pedidos insertados:', result);

    process.exit();
  })
  .catch((err) => {
    console.error('Error en migración:', err);
    process.exit(1);
  });
