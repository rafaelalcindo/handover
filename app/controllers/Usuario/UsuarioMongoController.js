    const mongoose = require('mongoose');
const UsuarioSchema = require('../../models/modelUsuarioMongo');
var usuarioModel = mongoose.model('Cliente', UsuarioSchema );
var usuario = new usuarioModel;

module.exports.cadastrarUsuarioMongo = (app, req, res) => {
    

    //console.log('Body: ', req.body);
    usuario._id      = new mongoose.Types.ObjectId;
    usuario.nome     = req.body.nome;
    usuario.idade    = req.body.idade;
    usuario.endereco = req.body.endereco;
    usuario.cidade   = req.body.cidade;
    usuario.estado   = req.body.estado;
    usuario.email    = req.body.email;
    usuario.login    = req.body.login;
    usuario.senha    = req.body.senha;
    usuario.vendedor = req.body.vendedor;

    usuario.save()
        .then((user) => res.send(user) )
        .catch( err => console.log(err));
}


// ============================== Pegando Dados Do MongoDB ===================================
module.exports.editarUsuarioMongo = (app, req, res) => {
    const id = req.params.usuarioId;
    const corpo = req.body;
    
    usuarioModel.update({ _id: id }, corpo)
        .then(() => {
            usuarioModel.findById(id)
                .then(result => res.status(201).json(result) );
        })
        .catch(err => console.log(err));
}

module.exports.pegarUsuarioMongo = (app, req, res) => {
    const id = req.params.usuarioId;
    console.log('Id: ',id);
    usuarioModel.findById(id)
        .exec()
        .then(result => res.send(result) )
        .catch(err => console.log(err));    
}

module.exports.deletarUsuarioMongo = (app, req, res) => {
    const id = req.params.usuarioId;
    
    usuarioModel.remove({_id: id })
        .exec()
        .then(result => {
            console.log(result)
            res.status(200).json(result)
        })
        .catch(err => console.log(err))
}

//=========================== Pegando os Usuários  ======================================

module.exports.pegarTodosUsuarios = (app, req, res) => {
    usuarioModel.find()
        .exec()
        .then(result => {
            res.status(200).json(result);
        })
        .catch( err => {
            console.log("Error: ", err)
            res.status(500).json(err);
        })
}

module.exports.pegarUsuarioVendedores = (app, req, res) => {
    usuarioModel.find().where({ 'vendedor': true })
        .then(result => {
            console.log(result);
            res.status(200).json(result);
        })
        .catch(error => {
            console.log(error);
            res.status(500).json(error);
        })
}

module.exports.pegarUsuarioClientes = (app, req, res) => {
    usuarioModel.find().where({ 'vendedor': false })
        .then(result => {
            res.status(200).json(result)
        })
        .catch(error => {
            res.status(500).json(error)
        })
}