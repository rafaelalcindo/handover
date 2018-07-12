let mysql = require('mysql');

let connMySQL = function() {
    console.log('conexao com DB foi estabelecida');
    return mysql.createConnection({
        host: '127.0.0.1',
        user: 'root',
        password: '',
        database: 'handover'
    })
}

module.exports = function () {
    return connMySQL;
}