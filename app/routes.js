var    express = require('express');
var       path = require('path');
var      mysql = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'forchat'
});

//create router obj
var  router = express.Router();

//export router
module.exports = router;

// route to homepage
router.get('/', function (req, res) {
    res.render('pages/index');
});

//route to register page
router.get('/register', function (req, res) {
    res.render('pages/register');
});

router.post('/register', function(req, res) {
    res.send('Thanks for contacting us, ' + req.body.user + '! We will respond shortly!');
    connection.connect(function(err){
        if(!err) {
            console.log("Database is connected ...");    
        } else {
            console.log("Error connecting database ...  ");    
        }
        /* var sql = "INSERT INTO users (user, pass) VALUES ('Amir', '22')";
        connection.query(sql, function (err, result) {
            if (err) throw err;
            console.log("1 record inserted");
        }); */
    });
});

// route to login page
router.get('/login', function (req, res) {
    res.render('pages/login');
});
