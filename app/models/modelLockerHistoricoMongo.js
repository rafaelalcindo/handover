const mongoose = require('mongoose');
const Schema   = mongoose.Schema;
const LockerSchema  = require('./modelLockerMongo');
const ProdutoSchema = require('./modelProdutoMongo');
const UsuarioSchema = require('./modelUsuarioMongo');


const HistoricoLockerSchema =  new Schema({
    _id: Schema.Types.ObjectId,
    data: { type: Date, default: Date.now },
    entregue: Boolean,
    locker: LockerSchema,
    produto: [ProdutoSchema],
    cliente: UsuarioSchema   
});

module.exports = HistoricoLockerSchema;