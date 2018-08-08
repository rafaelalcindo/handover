var { Pessoa } = require('../classes/Pessoa');
const { check, validationResult } = require('express-validator/check');

module.exports.cadastrarUsuario = (app, req, res) => {

    let pessoa = req.body;

    req.assert('nome','Digite o nome').notEmpty();
    req.assert('sobrenome','Coloque o sobrenome').notEmpty();

    console.log(pessoa.nome);

    let d = new Date();
    let n = d.getTime();       

    let Pessoa1 = new Pessoa();
    Pessoa1.nome         = pessoa.nome;
    Pessoa1.sobrenome    = pessoa.sobrenome;
    Pessoa1.login        = pessoa.login;
    Pessoa1.senha        = pessoa.senha;
    Pessoa1.email        = pessoa.email;
    Pessoa1.tel          = pessoa.tel;
    Pessoa1.cel          = pessoa.cel;
    Pessoa1.foto_perfil  = pessoa.foto_perfil;
    Pessoa1.data_cad     = n;

      


    if(!errors.isEmpty()){
        console.log('erro');
        return;
    }

    console.log('deu certo');
    return;

    Pessoa.cadastrarUsuario(Pessoa)
        .then((pessoa) => {
            console.log('Resultado Pessoa: ', pessoa)
        })
        .catch(() => {
            console.log('deu erro');
        })
    
}