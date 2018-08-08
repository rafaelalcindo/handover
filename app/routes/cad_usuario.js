module.exports = (app) => {
    app.post('/', (req, res) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        //app.app.controllers
    })

    app.post('/cadastro/usuario', (req, res) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        app.app.controllers.Usuario.UsuarioController.cadastrarUsuario(app, req, res);
    });

    app.post('/cadastro/usuario/endereco', (req, res) => {
    	res.setHeader('Access-Control-Allow-Origin', '*');
    	app.app.controllers.Usuario.UsuarioController.cadastarEnderecoPessoa(app, req, res);
    })

    app.post('/cadastro/usuario/pessoaFisica', (req, res) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        app.app.controllers.Usuario.UsuarioController.cadastroPessoaFisica(app, req, res);
    });

    app.post('/cadastro/mongo/cliente', (req, res) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        app.app.controllers.Usuario.UsuarioMongoController.cadastrarUsuarioMongo(app, req, res);
    });

}