const mongoose = require('mongoose');
const Schema   = mongoose.Schema;
const UsuarioSchema = require('./modelUsuarioMongo');

const ProdutoSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    nome: String,
    preco: Number,
    quantidade: Number,
    descricao: String,
    imagem: String,
    quantPedido: Number,
    vendedor: UsuarioSchema
});

module.exports = ProdutoSchema;