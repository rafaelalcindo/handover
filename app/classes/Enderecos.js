var { PrepareQueryPessoa } = require('./PrepareQuery/PrepareQueryPessoa');
var { ModelUsuario }       = require('./../models/modelUsuario');


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

    set Pessoa(Pessoa){ this._Pessoa = Pessoa }
    get Pessoa(){ return this.Pessoa }

    // ================ Fim Set Get ===================

    cadastrarEnderecoPessoa(connection, Endereco) {
        let queryPessoa = new PrepareQueryPessoa();
        let queryMontada = new queryPessoa
    }

    
}