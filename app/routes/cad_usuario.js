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

    // ================================ MongoDatabase ===================================

    app.get('/pegar/mongo/cliente', (req, res) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        app.app.controllers.Usuario.UsuarioMongoController.pegarTodosUsuarios(app, req, res);
    });

    app.post('/cadastro/mongo/cliente', (req, res) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        app.app.controllers.Usuario.UsuarioMongoController.cadastrarUsuarioMongo(app, req, res);
    });

    app.get('/cadastro/mongo/cliente/:usuarioId', (req, res) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        app.app.controllers.Usuario.UsuarioMongoController.pegarUsuarioMongo(app,req, res);
    });

    app.patch('/cadastro/mongo/cliente/update/:usuarioId', (req, res) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        app.app.controllers.Usuario.UsuarioMongoController.editarUsuarioMongo(app, req, res);
    });

    app.delete('/cadastro/mongo/cliente/delete/:usuarioId', (req, res) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        app.app.controllers.Usuario.UsuarioMongoController.deletarUsuarioMongo(app, req, res);
    })

    //======================== Pegar vendedor ou Cliente ==========================

    app.get('/pegar/mongo/cliente/vendedor', (req, res) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        app.app.controllers.Usuario.UsuarioMongoController.pegarUsuarioVendedores(app, req, res);
    })

    app.get('/pegar/mongo/cliente/usuario', (req, res) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        app.app.controllers.Usuario.UsuarioMongoController.pegarUsuarioClientes(app, req, res);
    });


}