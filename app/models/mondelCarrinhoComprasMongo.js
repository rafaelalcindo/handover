const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const UsuarioSchema = require('./modelUsuarioMongo');
const ProdutoSchema = require('./modelProdutoMongo');

const CarrinhoSchema = new Schema({
    _id: Schema.Types.ObjectId,
    quantidadeProduto: Number,
    cliente: UsuarioSchema,
    produtos: [ProdutoSchema]
});

module.exports = CarrinhoSchema;