var { PrepareQueryPessoa } = require('./../PrepareQuery/PrepareQueryPessoa');
var { ModelUsuario }       = require('./../../models/modelUsuario');

exports.PessoaFisica = class PessoaFisica {
    constructor() {}

    set cpf(cpf){ this._cpf = cpf }
    get cpf(){ return this._cpf }

    set idPessoa(idPessoa){ this._idPessoa = idPessoa }
    get idPessoa(){ return this._idPessoa }

    // ============================ Fim dos gets and Sets ====================================

    cadastrarPessoaFisica(connection, PessoaFisica){
        let queryPessoaFisica = new PrepareQueryPessoa();
        let queryMontata      = queryPessoaFisica.ligarPessoaPessoaFisica(PessoaFisica);
        let modelPessoa       = new ModelUsuario(connection);

        return new Promise((resolve, reject) => {
            if(Object.keys(PessoaFisica).length !== 0 ) {
                modelPessoa.salvar(queryMontata, (error, result) => {
                    if(error){
                        reject();
                    }
                    if(result != 0){
                        resolve(result);
                    }
                });
            } else {
                reject();
            }
        });
    }

    // ============================ Fim cadastro Pessoa Fisica ============================


    

}