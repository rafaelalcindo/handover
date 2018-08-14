const mongoose = require('mongoose');
const CarrinhoSchema = require('../../models/mondelCarrinhoComprasMongo');
const ProdutoSchema  = require('../../models/modelProdutoMongo');
const UsuarioSchema  = require('../../models/modelUsuarioMongo');

var carrinhoModel = mongoose.model('Carrinho', CarrinhoSchema);
var produtoModel  = mongoose.model('Produto', ProdutoSchema);
var usuarioModel  = mongoose.model('Cliente', UsuarioSchema);

var carrinho = new carrinhoModel;

module.exports.criarCarrinhoComUsuario = (app, req, res) => {
    const idCliente = req.params.idCliente;

    console.log('Id Cliente: ', idCliente);

    usuarioModel.findById(idCliente)
        .exec()
        .then(cliente => {
            let clienteObj = {};

            clienteObj._id      = cliente._id;
            clienteObj.nome     = cliente.nome;
            clienteObj.endereco = cliente.endereco;
            clienteObj.cidade   = cliente.cidade;
            clienteObj.estado   = cliente.estado;
            clienteObj.email    = cliente.email;
            clienteObj.vendedor = cliente.vendedor;

            carrinho._id        = new mongoose.mongo.ObjectId;
            carrinho.cliente    = clienteObj;
            
            carrinho.save()
                .then(carrinho => res.status(201).json(carrinho) )
                .catch( error => res.status(500).json(error) )
            
        })
}

module.exports.criarCarrinhoSemCliente = (app, req, res) => {
    carrinho._id = new mongoose.mongo.ObjectId;
    carrinho.save()
        .then(carrinho => res.status(201).json(carrinho) )
        .catch(error => res.status(500).json(error) )
}

module.exports.InserirProdutoCarrinho = (app, req, res) => {
    const idCarrinho  = req.body.idCarrinho;
    const idProduto   = req.body.idProduto;
    const quantPedido = req.body.quantPedido; 

   // console.log('Id Carrinho: ', idCarrinho);
    //console.log('Id Produto: ', idProduto);
    //console.log('Quant Pedido: ', quantPedido);

    produtoModel.findById(idProduto)
        .exec()
        .then(produto => {
            let produtoObj = {};
            produtoObj._id            = produto._id;
            produtoObj.nome        = produto.nome;
            produtoObj.preco       = produto.preco;
            produtoObj.imagem      = produto.imagem;
            produtoObj.vendedor    = produto.vendedor; 
            produtoObj.descricao   = produto.descricao;
            produtoObj.quantPedido = quantPedido;

            carrinhoModel.findById(idCarrinho)
                .exec()
                .then(carrinho => {
                    //console.log('Carrinho: ', carrinho);
                    let quantProduto = parseInt(carrinho.quantidadeProduto, 10) + parseInt(quantPedido, 10);
                    carrinhoModel.update({'_id':carrinho._id }, { $set: { produtos: [produtoObj], quantidadeProduto: quantProduto }  })
                        .exec()
                        .then(carrinho2 => {
                            res.status(200).json(carrinho2);
                        })
                        .catch(error => res.status(500).json(error) )
                })
                .catch(error => res.status(500).json(error) )

        })
        .catch(error => res.status(500).json(error) )
}


module.exports.acrescentarQuantProdutoCarrinho = (app, req, res) => {
    let idCarrinho   = req.body.idCarrinho;
    let idProduto    = req.body.idProduto;
    let quantProduto = req.body.quantProduto;
    

    console.log('id Carrinho: ', idCarrinho);
    console.log('id Produto: ', idProduto);
    
    carrinhoModel.findById(idCarrinho)
        .exec()
        .then(carrinho => {
            let quantUpdateProduto = parseInt(carrinho.produtos[0].quantPedido ) + parseInt(quantProduto);
            console.log('Quantidade Produto: ', carrinho.produtos[0].quantPedido);
            if(quantUpdateProduto <= 0){
                res.status(500).json({'mensagem':'Produto zerado, deseja retiralo?'});
            } else {
                carrinhoModel.findById(idProduto)
                    .exec()
                    .then(produto => console.log('Produto: ', produto))
                    .catch(error => console.log('Error: ', error) )
            }

        });
}
