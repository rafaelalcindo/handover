

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

	ligarPessoaEndereco(obj){
		let query;
		query = "insert into endereco (nome_end, numero, cidade, estado, pais, cep, bairro, idPessoa )";
		query += "values ('"+obj.nome_end+"','"+obj.numero+"','"+obj.cidade+"','"+obj.estado+"','"+obj.pais+"' ,'"+obj.cep+"','"+obj.bairro+"', "+obj.Pessoa+" )";
		return query;
	}

}