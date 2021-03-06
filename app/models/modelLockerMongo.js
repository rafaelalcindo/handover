const mongoose = require('mongoose');
const Schema   = mongoose.Schema;
const ProdutoSchema = require('./modelProdutoMongo');

const LockerSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    nome: String,
    pais: String,
    estado: String,
    cidade: String,
    cep: String,
    endereco: String,
    referencia: String,
    imagemLocker: String,
    produtos: [ProdutoSchema],
    lat: Number,
    log: Number

});

module.exports = LockerSchema;