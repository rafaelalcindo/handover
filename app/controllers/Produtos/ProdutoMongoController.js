const mongoose = require('mongoose');
const ProdutoSchema = require('../../models/modelProdutoMongo');
const UsuarioSchema = require('../../models/modelUsuarioMongo');
var produtoModel = mongoose.model('Produto', ProdutoSchema);
var usuarioModel = mongoose.model('Cliente', UsuarioSchema);
var produto = new produtoModel;



module.exports.cadastrarProduto = (app, req, res) => {
    const id_vendedor = req.body.idVendedor;

    console.log('id Vendedor: ', id_vendedor);
        
    usuarioModel.findById(id_vendedor)
        .then(result => {            
            let resultado = {};

            resultado._id      = result._id;
            resultado.nome     = result.nome;
            resultado.endereco = result.endereco;
            resultado.cidade   = result.cidade;
            resultado.estado   = result.estado;
            resultado.email    = result.email;
            resultado.vendedor = result.vendedor;

            console.log('Id 1: ', resultado._id);
            
            produto._id        = new mongoose.mongo.ObjectId();
            produto.nome       = req.body.nome; 
            produto.preco      = req.body.preco;
            produto.quantidade = req.body.quantidade;
            produto.descricao  = req.body.descricao;
            produto.imagem     = req.body.imagem;
            
            produto._id        = new mongoose.mongo.ObjectId();
            produto._id        = new mongoose.mongo.ObjectId();
            
            produto.vendedor  = resultado;

            

            if(result.vendedor){  
                console.log('Id 2: ', produto._id);              
                produto.save()
                .then( produto => res.status(201).json(produto) )
                .catch(error => res.status(500).json(error) )
            } else {
                res.status(500).json({'message': "Perfíl não é de vendedor!"})
            }
            
        })
        .catch(error => res.status(500).json(error) )
}


// =============================== Consultar Produtos ========================================

module.exports.mostrarProdutos = (app, req, res) => {
    produtoModel.find()
        .exec()
        .then((produtos) => res.status(200).json(produtos) )
        .catch(error => res.status(500).json(error) )
}

