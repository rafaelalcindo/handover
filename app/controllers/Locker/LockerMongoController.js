const mongoose = require('mongoose');
const LockerSchema  = require('../../models/modelLockerMongo');
const ProdutoSchema = require('../../models/modelUsuarioMongo');
const UsuarioSchema = require('../../models/modelUsuarioMongo');

var lockerModel  = mongoose.model('Locker', LockerSchema);
//var produtoModel = mongoose.model('Produto', ProdutoSchema);
var usuarioModel = mongoose.model('Cliente', UsuarioSchema);

var locker = new lockerModel;

module.exports.cadastrarLocker = (app, req, res) => {
//    let idProduto = req.body.idProduto;
    
    locker._id          = new mongoose.Types.ObjectId;
    locker.nome         = req.body.nome;
    locker.pais         = req.body.pais;
    locker.estado       = req.body.estado;
    locker.cidade       = req.body.cidade;
    locker.cep          = req.body.cep;
    locker.endereco     = req.body.endereco;
    locker.referencia   = req.body.referencia;
    locker.imagemLocker = req.body.imagemLocker;
    locker.lat          = req.body.lat;
    locker.log          = req.body.log;

    locker.save()
        .then(locker => res.status(200).json(locker) )
        .catch(error => res.status(500).json(error) )

}