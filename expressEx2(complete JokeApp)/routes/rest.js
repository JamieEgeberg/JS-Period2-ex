var express = require('express');
var router = express.Router();
var jokes = require('../model/jokes');

/* GET home page. */
router.get('/joke/random', function (req, res, next) {
    res.json(jokes.getRandomJoke());
    //next();
});

router.get('/jokes', function (req, res, next) {
    res.json(jokes.allJokes);
    //next();
});

router.post('/joke', function (req, res, next) {
    if (req.body.joke) {
        jokes.addJoke(req.body.joke);
        res.send('OK');
    } else res.send('fail...');
    //next();
});

module.exports = router;