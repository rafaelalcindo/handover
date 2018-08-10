module.exports = (app) => {

    app.get('/carrinho/mongo/cliente/:idCliente', (req, res) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        app.app.controllers.CarrinhoCompra.CarrinhoMongoController.criarCarrinhoComUsuario(app, req, res);

    });

    app.get('/carrinho/mongo/semcliente', (req, res) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        app.app.controllers.CarrinhoCompra.CarrinhoMongoController.criarCarrinhoSemCliente(app, req, res);
    });

    app.post('/carrinho/mongo/cliente/inserir/produto', (req, res) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        app.app.controllers.CarrinhoCompra.CarrinhoMongoController.InserirProdutoCarrinho(app, req, res);
    });

    app.post('/carrinho/mongo/cliente/acrescentar/quantproduto', (req, res) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        app.app.controllers.CarrinhoCompra.CarrinhoMongoController.acrescentarQuantProdutoCarrinho(app, req, res);
    })


}