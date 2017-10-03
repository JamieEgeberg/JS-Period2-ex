var express = require('express');
var router = express.Router();
var jokes = require('../model/jokes');

/* GET home page. */
var storeJokeCount = 0;
router.post('/', function (req, res, next) {
    req.session.storeJokeCount = ++storeJokeCount;
    if (req.body.joke) {
        jokes.addJoke(req.body.joke);
    }
    res.redirect('/');
    next();
});

module.exports = router;
