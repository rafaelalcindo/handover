module.exports = (app) => {

    app.post('/cadastro/mongo/locker', (req, res) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        app.app.controllers.Locker.LockerMongoController.cadastrarLocker(app,req, res);
    });

    app.post('/cadastro/mongo/locker/inserir/produto', (req, res) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        app.app.controllers.Locker.LockerMongoController.inserirProdutoLocker(app, req, res);
    });

    app.get('/pegar/mongo/locker/info/:idLocker', (req, res) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        app.app.controllers.Locker.LockerMongoController.pegarInfoLocker(app, req, res);
    } )

    app.post('/cadastrar/mongo/lockerHistorico/inserir/historico', (req, res) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        app.app.controllers.Locker.LockerMongoController.AdicionarHistoricoLocker(app, req, res);
    })

    app.get('/pegar/mongo/lockerHistorico/info/:idLockerHistorico', (req, res) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        app.app.controllers.Locker.LockerMongoController.pegarHistoricoLocker(app, req, res);
    })

}