var express = require('express');
var router = express.Router();
var jokes = require('../model/jokes');
var jokeCount = 0;
router.get('/', function (req, res, next) {
    req.session.jokeCount = ++jokeCount;
    res.render('joke', { title: 'Random Joke', joke: jokes.getRandomJoke(), count: req.session.jokeCount });
});

module.exports = router;