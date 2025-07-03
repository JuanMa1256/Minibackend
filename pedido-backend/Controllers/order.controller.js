const servicio = require('../Servicio/order.service');

// Obtener pedidos (en curso + cerrados)
const obtenerPedidos = async (req, res) => {
  try {
    const data = await servicio.listarPedidos(req.tenantId);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Crear nuevo pedido
const crearPedido = async (req, res) => {
  try {
    const pedido = await servicio.crearPedido(req.body, req.tenantId);
    res.status(201).json(pedido);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Cerrar pedido existente
const cerrarPedido = async (req, res) => {
  try {
    const pedido = await servicio.cerrarPedido(req.params.id);
    res.json(pedido);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener por Id
const obtenerPedidosPorId = async (req, res) => {
    try{
        const pedido = await servicio.obtenerPedidosPorId(req.params.id, req.tenantId);
        if (!pedido) {
            return res.status(404).json({ error: 'Pdido no encontrado'});
        }else{
            res.json(pedido);
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const actualizarPedido = async (req, res) => {
    try {
        const acutalizado = await servicio.actualizarPedido(req.params.id, req.body, req.tenantId);
        if (!actualizado) return res.status(404).json({ error: 'Pedido no encontrado' });
        res.json(actualizado);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}


//ELIMINAR
const eliminarPedido = async (req, res) => {
  try {
    const eliminado = await servicio.eliminarPedido(req.params.id, req.tenantId);
    if (!eliminado) return res.status(404).json({ error: 'Pedido no encontrado' });
    res.json({ mensaje: 'Pedido eliminado' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  obtenerPedidos,
  crearPedido,
  cerrarPedido,
  obtenerPedidosPorId,
  actualizarPedido,
  eliminarPedido,
};
