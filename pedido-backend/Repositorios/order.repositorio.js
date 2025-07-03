const Order = require('../Models/orders');

// Buscar todos los pedidos de un inquilino
const findByTenant = (tenantId) => Order.find({ tenantId });

// Buscar pedidos en curso
const findInProgress = (tenantId) =>
  Order.find({ tenantId, estado: 'En Curso' });

// Buscar los últimos cerrados (limita a 5 por defecto)
const findLastClosed = (tenantId, limit = 5) =>
  Order.find({ tenantId, estado: 'Cerrado' })
       .sort({ Fechapedido: -1 })
       .limit(limit);

// Crear nuevo pedido
const create = (pedido) => Order.create(pedido);

// Cambiar estado del pedido
const updateEstado = (id, nuevoEstado) =>
  Order.findByIdAndUpdate(id, { estado: nuevoEstado }, { new: true });

const findByIdAndTenant = (id, tenantId) =>
  Order.findOne({ _id: id, tenantId });


//Actualizar
const updatePedido = (id, data, tenantId) =>
  Order.findOneAndUpdate({ _id: id, tenantId }, data, { new: true });


//Eliminar
const deletePedido = (id, tenantId) =>
  Order.findOneAndDelete({ _id: id, tenantId });


module.exports = {
  findByTenant,
  findInProgress,
  findLastClosed,
  create,
  updateEstado,
  findByIdAndTenant,
  updatePedido,
  deletePedido,
};
