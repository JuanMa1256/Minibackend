const express = require('express');
const router = express.Router();
const controlador = require('../Controllers/order.controller');
const middlewareTenant = require('../Middlewares/tenant.middleware');

router.use(middlewareTenant);

// Rutas
router.get('/', controlador.obtenerPedidos);
router.post('/', controlador.crearPedido);
router.get('/:id', controlador.obtenerPedidosPorId);
router.put('/:id', controlador.actualizarPedido);
router.delete('/:id', controlador.eliminarPedido);
router.patch('/:id/cerrar', controlador.cerrarPedido);

module.exports = router;
