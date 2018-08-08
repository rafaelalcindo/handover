 const mongoose = require('mongoose');
 const Schema   = mongoose.Schema;

 const UsuarioSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    nome: String,
    idade: Number,
    endereco: String,
    cidade: String,
    estado: String,
    email: String,
    login: String,
    senha: String,
    vendedor: Boolean
 });

//var UsuarioShemas = mongoose.model('Usuario', UsuarioSchema, "collection");
//console.log('Schema: ',UsuarioShemas);
module.exports = UsuarioSchema;

