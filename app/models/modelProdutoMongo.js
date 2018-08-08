const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const ProdutoSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    nome: String,
    preco: Number,
    descricao: String,
    imagem: String
});

module.exports = ProdutoSchema;