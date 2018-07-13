var { Pessoa } = require('../classes/Pessoa');

module.exports.cadastrarUsuario = (app, res, req) => {

    let pessoa = req.body;
    

    let Pessoa = new Pessoa();
    Pessoa.nome         = pessoa.nome;
    Pessoa.sobrenome    = pessoa.sobrenome;
    Pessoa.login        = pessoa.login;
    Pessoa.senha        = pessoa.senha;
    Pessoa.email        = pessoa.email;
    Pessoa.tel          = pessoa.tel;
    Pessoa.cel          = pessoa.cel;
    Pessoa.foto_perfil  = pessoa.foto_perfil;

    Pessoa.cadastrarUsuario(Pessoa)
        .then((pessoa) => {
            console.log('Resultado Pessoa: ', pessoa)
        })
        .catch(() => {
            console.log('deu erro');
        })
    
}