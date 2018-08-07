var { Pessoa }       = require('../../classes/Usuario/Pessoa');
var   moment         = require('moment');
var { Endereco }     = require('../../classes/Usuario/Enderecos');
var { PessoaFisica } = require('../../classes/Usuario/PessoaFisica');
var crypto           = require('crypto');
var fs               = require('fs');

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

     VerificarExtencaoDoArquivo(req.files.foto_perfil)
        .then(() => {  })
        .catch(() => res.send({'error':'arquivo nao permitido'}) );    
    
    let resul_foto_perfil = UploadingFotoPerfil(req.files.foto_perfil, pessoa.email );    
    
    
    let Pessoa1 = new Pessoa();
    Pessoa1.nome         = pessoa.nome;
    Pessoa1.sobrenome    = pessoa.sobrenome;
    Pessoa1.login        = pessoa.login;
    Pessoa1.senha        = criptografarArquivo('aes-256-ctr',pessoa.senha) ;
    Pessoa1.email        = pessoa.email;
    Pessoa1.tel          = pessoa.tel;
    Pessoa1.cel          = pessoa.cel;
    Pessoa1.foto_perfil  = resul_foto_perfil;
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


//=======================================================================================================
// ===================================  Funções Helpers  ================================================
//=====================================  HELPERS ========================================================
//=======================================================================================================

//  ========================== Criptografar arquivo ===========================================

function criptografarArquivo(texto, arquivo){ 
    let cipher  = crypto.createCipher(texto, arquivo);
    let crypted = cipher.update(texto,'utf8','hex');
    crypted += cipher.final('hex');
    return crypted;
}

function descriptografarArquivo(texto, arquivo) {
    let decipher = crypto.createCipher(texto, arquivo);
    let dec      = decipher.update(texto, 'hex','utf8');
    dec          += decipher.final('utf8');
    return dec;
}

// ======================Fim Criptografando Arquivo ========================================

// ====================== Uploading Imagem ================================

function UploadingFotoPerfil(file, email){
//    console.log('Path: ', __dirname);
    console.log('File: ', file);
    let dir = "app/file_users/"+criptografarArquivo('aes-256-ctr',email);
    try {
        fs.mkdirSync(dir);
        if(file){
            file.mv(dir+"/"+file.name);
        }else { throw e }
        return dir;
    }catch(e){
        return null;
    }
}

function VerificarExtencaoDoArquivo(nomeArquivo) {
    return new Promise((resolve, reject) => {
        let arrayExtencao = ['.jpg','.png'];
        let i = nomeArquivo.name.lastIndexOf('.');
        let extencao = nomeArquivo.name.substr(i);
        arrayExtencao.filter(filter => {
            if(filter === extencao){
                console.log('filter: ', filter)
                resolve();
            }
        })
        reject();
    });    
        
}