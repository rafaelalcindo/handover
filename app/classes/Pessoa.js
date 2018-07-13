
exports.Pessoa = class Pessoa {

        
    constructor() {}

    set nome(nome){ this._nome = nome }
    get nome() { return this._nome }

    set sobrenome(sobrenome){ this._sobrenome = sobrenome }
    get sobrenome(){ return this._sobrenome }

    set login(login){ this._login = login }
    get login(){ return this._login }

    set senha(senha){ this._senha = senha }
    get senha(){ return this._senha }

    set email(email){ this._email = email }
    get email(){ return this._email }

    set ativo(ativo){ this._ativo = ativo }
    get ativo(){ return this._ativo }

    set tel(tel){ this._tel = tel }
    get tel(){ return this._tel  }

    set cel(cel){ this._cel = cel }
    get cel(){ return this._cel }

    set foto_perfil(foto_perfil){ this._foto_perfil  = foto_perfil}
    get foto_perfil(){ return this._foto_perfil }

    set data_cad(data_cad){ this._data_cad = data_cad }
    get data_cad(){ this._data_cad }

    set endereco(endereco) { this._endereco.push(endereco) }
    get endereco() { return this._endereco }




    //--------------------------------------------------------------

    //================= Ligando outras Classes ==================

    //---------------------------------------------------------------
   


    //====================== Terminando Gets and Setters =================


    //========================== Começando Os métodos de Cadastro ==========================

    cadastrarUsuario(Pessoa){
        return new Promise((resolve, reject)=>{
            if(Pessoa.length === 0){
                resolve(Pessoa);
            }else {
                reject();
            }
        })
    }
    

}