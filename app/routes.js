var express = require('express');
var    path = require('path');
var   mysql = require('mysql');
var  moment = require('moment');
var  config = {
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'forchat'
};

//create router obj
var router = express.Router();

//export router
module.exports = router;

// route to homepage
router.get('/', function (req, res) {
    res.render('pages/index');
    /*let con = mysql.createConnection(config);
    let sql ="SELECT * FROM chat";
    con.query(sql, function (err, result, fields) {
        if (err) {
            return console.error(err.message);
        }
        res.header("Content-Type",'application/json');
        res.send(JSON.stringify(result, null, 4));
    });
    con.end();*/
    
});

/*router.post('/sendChat', function(req, res) {
    let con = mysql.createConnection(config);
    let sql ="INSERT INTO chat (text, user, date) VALUES (?,?,?)";
    let timeStamp = moment().format("YYYY-MM-DD h:mm:ss");   
    let todo = [req.body.chat, req.body.user, timeStamp];
    con.query(sql, todo, function (err, results, fields) {
        if (err) {
            return console.error(err.message);
        }
    });
    con.end();
    res.redirect('back');
});*/

//route to register page
/* router.get('/register', function (req, res) {
    
});

router.post('/register', function(req, res) {
    mysql.connect(function(err){
        if(!err) {
            printItBitch("Database is connected ...");   
        } else {
            printItBitch("Error connecting database ...  ");
        }
        var sql = "SELECT user FROM users WHERE user = ?";
        mysql.query(sql, [req.body.user], function (err, result) {
            if (err) {
                throw err;
            }
            if (result.length > 0) {
                mysql.end();
                printItBitch("User is already in use");
            } else {
                sql = "INSERT INTO users (user, pass, email) VALUES ( '" + req.body.user + "', '" + req.body.pass1 + "', '" + req.body.email + "')";
                mysql.query(sql, function (err, result) {
                    mysql.end();
                    if (err) {
                        throw err;
                    }
                    printItBitch("1 record inserte");
                });
            }
        });
    });
}); */
