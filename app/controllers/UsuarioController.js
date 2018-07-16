var { Pessoa }   = require('../classes/Pessoa');
var { Endereco } = require('../classes/Enderecos');

module.exports.cadastrarUsuario = (app, req, res) => {

    let pessoa = req.body;
    
    req.assert('nome','Nome Obregatório').notEmpty();
    req.assert('sobrenome','Sobrenome Obrigatório').notEmpty();
    req.assert('login','Login Obrigatório').notEmpty().len(5);
    req.assert('senha','Senha Obrigatória').len(5,100);
    req.assert('email','Digite o Email').len(6);

    let errors = req.validationErrors();

    if(errors){
        res.send({ validacao: errors });
        return;
    }

    let Pessoa1 = new Pessoa();
    Pessoa1.nome         = pessoa.nome;
    Pessoa1.sobrenome    = pessoa.sobrenome;
    Pessoa1.login        = pessoa.login;
    Pessoa1.senha        = pessoa.senha;
    Pessoa1.email        = pessoa.email;
    Pessoa1.tel          = pessoa.tel;
    Pessoa1.cel          = pessoa.cel;
    Pessoa1.foto_perfil  = pessoa.foto_perfil;

    let connection = app.config.dbConnectionMysql();

    Pessoa1.cadastrarUsuario(connection, Pessoa1)
        .then((pessoa) => {
            console.log('Resultado Pessoa: ', pessoa);
            res.send({pessoaInserida: pessoa});
        })
        .catch(() => {
            console.log('deu erro');
        })
    
}

// ============================================ Fim do Cadastro de pessoa ==============================================


module.exports.cadastarEnderecoPessoa = (app, req, res) => {
    let endereco = req.body;

    req.assert('nome_end','Digite o Seu endereco').len(3);
    req.assert('numero','Por favor digite o número da sua residencia').notEmpty();
    req.assert('cep','Digite o seu cep').notEmpty()
    req.assert('bairro','Digite o seu bairro').notEmpty();
    req.assert('cidade','Coloque a sua cidade').notEmpty();
    req.assert('estado','Coloque o seu estado').notEmpty();

    let errors = req.validationErrors;
    if(errors) {
        res.send({ validacao: errors });
        return;
    }

    let connection = app.config.dbConnectionMysql();


}