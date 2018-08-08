 const mongoose = require('mongoose');
 const Schema   = mongoose.Schema;

 const UsuarioSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    nome: String,
    idade: Number,
    endereco: String,
    cidade: String,
    Estado: String
 });

//var UsuarioShemas = mongoose.model('Usuario', UsuarioSchema, "collection");
//console.log('Schema: ',UsuarioShemas);
module.exports = UsuarioSchema;

