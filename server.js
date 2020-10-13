var express = require('express');
var expressLayouts = require('express-ejs-layouts');

var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
const port = process.env.PORT;

// use ejs and express layouts
app.set('view engine', 'ejs');
app.set('views', './public');
app.use(expressLayouts);

//route our app
var router = require('./app/routes');
app.use('/', router);

//set css, js files
app.use(express.static(__dirname + '/public'));

/*************** io SECTTION ***************/
io.on('connection', function (socket) {
    socket.on('chat message', function (msg, userName) {
        console.log('user: ' + userName + ', message: ' + msg);
        io.emit('chat message', msg, userName);
    });
});

/*********** END fot io SECTTION ***********/
//route to 404 page
app.use(function (req, res) {
    res.render('pages/404');
});

http.listen(port, () => {
    console.log(`Server is up on port: ${port}.`);
});
