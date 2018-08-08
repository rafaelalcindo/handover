const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const LockerSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    nome: String,
    pais: String,
    estado: String,
    cidade: String,
    cep: String,
    referencia: String,

});

module.exports = LockerSchema;