    const mongoose = require('mongoose');
const UsuarioSchema = require('../../models/modelUsuarioMongo');

module.exports.cadastrarUsuarioMongo = (app, req, res) => {
    let usuarioModel = mongoose.model('Cliente', UsuarioSchema );
    let usuario = new usuarioModel;

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
        .then((user) => console.log('Usuario: ', user))
        .catch( err => console.log(err));

}