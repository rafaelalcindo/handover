var { Pessoa }   = require('../../classes/Usuario/Pessoa');
var   moment     = require('moment');
var { Endereco } = require('../../classes/Usuario/Enderecos');
var { PessoaFisica } = require('../../classes/Usuario/PessoaFisica');

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

    let timeStamp = moment(Date.now()).format('YYYY-MM-DD HH:mm:ss');
    
    let Pessoa1 = new Pessoa();
    Pessoa1.nome         = pessoa.nome;
    Pessoa1.sobrenome    = pessoa.sobrenome;
    Pessoa1.login        = pessoa.login;
    Pessoa1.senha        = pessoa.senha;
    Pessoa1.email        = pessoa.email;
    Pessoa1.tel          = pessoa.tel;
    Pessoa1.cel          = pessoa.cel;
    Pessoa1.foto_perfil  = pessoa.foto_perfil;
    Pessoa1.data_cad     = timeStamp;

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
    req.assert('PessoaId','Selecione o Usuario').notEmpty();

    let errors = req.validationErrors();

    if(errors) {        
        res.send({ validacao: errors });
        return;
    }

    let enderecoPessoa = new Endereco();
    enderecoPessoa.nome_end  = endereco.nome_end;
    enderecoPessoa.numero    = endereco.numero;
    enderecoPessoa.cep       = endereco.cep;
    enderecoPessoa.bairro    = endereco.bairro;
    enderecoPessoa.cidade    = endereco.cidade;
    enderecoPessoa.estado    = endereco.estado;
    enderecoPessoa.pais      = endereco.pais;
    enderecoPessoa.Pessoa    = endereco.PessoaId;

    let connection = app.config.dbConnectionMysql();

    enderecoPessoa.ligarUsuarioEndereco(connection, enderecoPessoa)
        .then((endereco) => res.send({ endereco: endereco }))
        .catch(() => res.send({ erro: 'erro ao ligar' }) )


}

// =================================== Fim controller Cadastro Endereco ===================================

module.exports.cadastroPessoaFisica = (app, req, res ) => { 
    let pessoaFisica = req.body;

    req.assert('PessoaId','Selecione o Usuario').notEmpty();
    req.assert('cpf','Digite o CPF').notEmpty();

    let errors = req.validationErrors();

    if(errors) {
        res.send({ validacao: errors });
        return;
    }

    let pessoaFisicaLigar = new PessoaFisica();
    pessoaFisicaLigar.cpf      = pessoaFisica.cpf;
    pessoaFisicaLigar.idPessoa = pessoaFisica.PessoaId;
    
    let connection = app.config.dbConnectionMysql();

    pessoaFisicaLigar.cadastrarPessoaFisica(connection, pessoaFisicaLigar)
        .then((pessoaFisica) => res.send({ pessoaFisica: pessoaFisica }) )
        .catch(() => res.send({ erro: 'erro ao ligar' }) );

}