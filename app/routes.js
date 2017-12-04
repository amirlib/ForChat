var express = require('express');
var path = require('path');

//create router obj
var router = express.Router();

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

// route to login page
router.get('/login', function (req, res) {
    res.render('pages/login');
});