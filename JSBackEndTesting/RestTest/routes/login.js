var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('login', { title: 'Login' });
});

router.post('/', function (req, res, next) {
    if (req.body.userName) {
        req.userName;
    }
    res.redirect('/');
    next();
});

module.exports = router;