// server.js
var        express = require('express');
var expressLayouts = require('express-ejs-layouts');
var     bodyParser = require('body-parser');
var            app = express();
var           port = 8080;

// use ejs and express layouts
app.set('view engine', 'ejs');
app.use(expressLayouts);

// use body parser
app.use(bodyParser.urlencoded({extended: true }));

//route our app
var router = require('./app/routes');
app.use('/', router);

//set css, js files
app.use(express.static(__dirname + '/public'));

//route to 404 page
app.use(function (req, res) {
    res.render('pages/404');
});

// start the server
app.listen(port, function() {
    console.log('app started');
});