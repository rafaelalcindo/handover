var { PrepareQueryPessoa } = require('./../PrepareQuery/prepareQueryPessoa');
var { ModelUsuario }       = require('./../../models/modelUsuario');

exports.Endereco = class Endereco{
    constructor(){ }

    set nome_end(nome_end){ this._nome_end = nome_end }
    get nome_end(){ return this._nome_end }

    set numero(numero){ this._numero = numero }
    get numero(){ return this._numero }

    set cidade(cidade){ this._cidade = cidade }
    get cidade(){ return this._cidade }

    set estado(estado){ this._estado = estado }
    get estado(){ return this._estado }

    set pais(pais) { this._pais = pais }
    get pais() { return this._pais }

    set cep(cep) { this._cep = cep }
    get cep() { return this._cep }

    set bairro(bairro) { this._bairro =bairro }
    get bairro(){ return this._bairro }

    set lat(lat){ this._lat = lat }
    get lat(){ return this._lat }

    set lon(lon){ this._lon = lon }
    get lon(){ return this._lon }

    set Pessoa(PessoaId){ this._PessoaId = PessoaId }
    get Pessoa(){ return this._PessoaId }

    // ===================================== Fim do Get and Set ======================================

    ligarUsuarioEndereco(connection, Endereco) {
        let queryEnderecoInsert = new PrepareQueryPessoa();
        let queryMontada        = queryEnderecoInsert.ligarPessoaEndereco(Endereco);
        let modelPessoa         = new ModelUsuario(connection);
        console.log('Endereco: ', Endereco);
        console.log('Query Montada', queryMontada);

        return new Promise((resolve, reject) => {
            if(Object.keys(Endereco).length !== 0 ) {
                modelPessoa.salvar(queryMontada, (error, result) => {
                    if(error){
                        reject();
                    }
                    if(result != ''){
                        resolve(result);
                    }
                })
            } else {
                reject();
            }
        });
    }

    
}