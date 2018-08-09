module.exports = (app) => {

    app.post('/cadastro/mongo/produto', (req, res) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        app.app.controllers.Produtos.ProdutoMongoController.cadastrarProduto(app, req, res);
    })

    app.get('/pegar/mongo/produtos', (req, res) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        app.app.controllers.Produtos.ProdutoMongoController.mostrarProdutos(app, req, res);
    });

}