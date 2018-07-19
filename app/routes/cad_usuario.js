module.exports = (app) => {
    app.post('/', (req, res) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        //app.app.controllers
    })

    app.post('/cadastro/usuario', (req, res) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        app.app.controllers.UsuarioController.cadastrarUsuario(app, req, res);
    });

    app.post('/cadastro/usuario/endereco', (req, res) => {
    	res.setHeader('Access-Control-Allow-Origin', '*');
    	app.app.controllers.UsuarioController.cadastarEnderecoPessoa(app, req, res);
    })
}