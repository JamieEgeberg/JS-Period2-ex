var express = require('express');
var router = express.Router();
var jokes = require('../model/jokes');

/* GET home page. */
var jokesCount = 0;
router.get('/', function (req, res, next) {
    req.session.jokesCount = ++jokesCount;
    res.render('allJokes', { title: 'All Jokes', jokes: jokes.allJokes});
});

module.exports = router;