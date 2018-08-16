const mongoose = require('mongoose');
const LockerSchema  = require('../../models/modelLockerMongo');
const ProdutoSchema = require('../../models/modelProdutoMongo');
const UsuarioSchema = require('../../models/modelUsuarioMongo');
const HistoricoLockerSchema = require('../../models/modelLockerHistoricoMongo');

var lockerModel  = mongoose.model('Locker', LockerSchema);
var produtoModel = mongoose.model('Produto', ProdutoSchema);
var usuarioModel = mongoose.model('Cliente', UsuarioSchema);
var historicoLockerModel = mongoose.model('HistoricoLocker', HistoricoLockerSchema);

var locker          = new lockerModel;
var lockerHistorico = new historicoLockerModel;

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

module.exports.inserirProdutoLocker = (app, req, res) => {

    let idLocker    = req.body.idLocker;
    let idProduto   = req.body.idProduto;

    lockerModel.findById(idLocker)
        .exec()
        .then(locker => {
            //console.log('Locker: ', locker);
            produtoModel.findById(idProduto)
                .exec()
                .then(produto => {
                    //console.log('Produto: ', produto);
                    lockerModel.update({ '_id': idLocker }, { $set : { produtos: [produto] } })
                        .exec()
                        .then(locker => res.status(200).json(locker) )
                        .catch(error => res.status(500).json(error) )
                })
        })
}

module.exports.pegarInfoLocker = (app, req, res) => {
    let idLocker  = req.params.idLocker;
    console.log('id Locker: ', idLocker);
    lockerModel.findById(idLocker)
        .exec()
        .then(locker => res.status(200).json(locker)  )
        .catch( error => res.status(500).json(error) )
}

module.exports.esvaziarLocker = (app, req, res) => {
    let idLocker = req.params.idLocker

    lockerModel.update({'_id': idLocker },{ $unset: { produtos: [] } })
        .exec()
        .then(result => res.status(200).json(result) )
        .catch( error => res.status(500).json(error) );
}



// ========================================= Histórico Locker =================================================

module.exports.AdicionarHistoricoLocker = (app, req, res) => {
    let idLocker  = req.body.idLocker;
    let idCliente = req.body.idCliente;

    lockerHistorico._id      = new mongoose.Types.ObjectId;
    lockerHistorico.entregue = false;

    lockerModel.findById(idLocker)
        .exec()
        .then(locker => {
            lockerHistorico.locker = locker;
            usuarioModel.findById(idCliente)
                .exec()
                .then(cliente => {
                    lockerHistorico.cliente = cliente;
                    lockerHistorico.save()
                        .then(lockerHistorico => res.status(200).json(lockerHistorico) )
                        .catch(error => res.status(500).json(error) )
                }) 
        })
}

module.exports.pegarHistoricoLocker = (app, req, res) => {
    let idLockerHistorico = req.params.idLockerHistorico
    //console.log('idLockerHistorico: ', idLockerHistorico);
    historicoLockerModel.findById(idLockerHistorico)
        .exec()
        .then(historicoLocker => res.status(200).json(historicoLocker) )
        .catch(error => res.status(500).json(error)  )
}


