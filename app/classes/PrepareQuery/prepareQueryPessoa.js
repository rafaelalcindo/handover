
exports.PrepareQueryPessoa = class PrepareQueryPessoa {

	constructor(){ }

	salvarPessoa(obj){
		console.log('Objeto: ', obj);
		let query;
		query = "insert into pessoa( nome, sobrenome, login, senha, email, ativo, tel, cel, foto_perfil, data_cad )";
		query += "values";
		query += "('"+obj.nome+"','"+obj.sobrenome+"', '"+obj.email+"','"+obj.senha+"', '"+obj.email+"',1,'"+obj.tel+"', '"+obj.cel+"', '"+obj.foto_perfil+"','"+obj.data_cad+"')";
		return query;
	}




}