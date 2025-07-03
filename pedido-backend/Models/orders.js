const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
  Fechapedido: Date,
  estado: {
    type: String,
    enum: ['En Curso', 'Cerrado'],
    default: 'En Curso'
  },
  cliente: String,
  total: Number,
  items: [{
    producto: String,
    cantidad: Number,
    precio: Number
  }],
  tenantId: String
}, {
  timestamps: true
});

module.exports = mongoose.model('Order', OrderSchema);
