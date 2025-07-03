const repositorio = require('../Repositorios/order.repositorio');

// Obtener pedidos en curso y últimos cerrados
async function listarPedidos(tenantId) {
  const enCurso = await repositorio.findInProgress(tenantId);
  const cerrados = await repositorio.findLastClosed(tenantId);
  return {
    enCurso,
    cerrados
  };
}

// Crear un nuevo pedido
async function crearPedido(pedido, tenantId) {
  return repositorio.create({ ...pedido, tenantId });
}

// Cerrar un pedido existente
async function cerrarPedido(idPedido) {
  return repositorio.updateEstado(idPedido, 'Cerrado');
}

//Obtener id
async function obtenerPedidosPorId(id, tenantId) {
    const pedido = await repositorio.findByAndTenant(id, tenantId);
    return pedido;
}

//actualizar Pedido
async function actualizarPedido(id, data, tenantId) {
  return repositorio.updatePedido(id, data, tenantId);
}

//Eliminar Pedido
async function eliminarPedido(id, tenantId) {
  return repositorio.deletePedido(id, tenantId);
}

module.exports = {
  listarPedidos,
  crearPedido,
  cerrarPedido,
  obtenerPedidosPorId,
  actualizarPedido,
  eliminarPedido
};
