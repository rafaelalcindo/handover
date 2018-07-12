exports.ModelUsuario = class ModelUsuario {
    constructor(connection) {
        this._connection = connection;
    }

    salvar(sql_query, callback) {
        this._connection.query(sql_query, callback);
    }

    consultar(sql_query, callback) {
        this._connection.query(sql_query, callback);
    }

    atualizar(sql_query, callback){
        this._connection.query(sql_query, callback);
    }
}
