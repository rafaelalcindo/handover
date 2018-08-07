let express     = require('express');
let consign     = require('consign');
let bodyParser  = require('body-parser');
let expressValidator = require('express-validator');
//let cookieParser     = require('cookie-parser');
let expressSession   = require('express-validator');
let fileUpload       = require('express-fileupload');

let app = express();
app.set('view engine','ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(expressValidator());
app.use(fileUpload());


consign()
    .include('app/routes')
    .then('config/dbConnectionMysql.js')
    .then('config/dbConnectionMongoDB.js')
    .then('app/models')
    .then('app/controllers')
    .into(app)

module.exports = app;