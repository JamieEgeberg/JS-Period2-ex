var request = require("request");
var mocha = require('mocha');
var assert = require('assert');
var http = require("http");
var app = require('../app');
var server;
var TEST_PORT = 3456;

beforeEach(function (done) {
    var app = require('../app');
    server = http.createServer(app);
    server.listen(TEST_PORT, () => {
        done();
    });
})
afterEach(function (done) {
    server.close();
    done();
})

describe("Get: /api/joke/random ", () => {
    var options = {
        url: "http://localhost:" + TEST_PORT + "/api/joke/random",
        method: "GET",
        json: true
    }

    it("should get a random joke", (done) => {
        request(options, (error, res, body) => {
            assert(res.body.length > 0);
            done();
        });
    })
});

describe("Get: /api/jokes ", () => {
    var options = {
        url: "http://localhost:" + TEST_PORT + "/api/jokes",
        method: "GET",
        json: true
    }

    it("should get all the jokes", (done) => {
        request(options, (error, res, body) => {
            var countJokes = res.body.length;
            assert.equal(countJokes, 3);
            done();
        });
    })
});

describe("POST: /api/joke ", function () {
    var options = {
        url: "http://localhost:" + TEST_PORT + "/api/joke",
        method: "POST",
        json: true,
        body: { joke: "What is the OO way to become rich? Inheritance." }
    }

    it("should add the joke specified", function (done) {
        request(options, function (error, res, body) {
            var addedJoke = body.joke;
            assert.equal(addedJoke, options.body.joke);
            //You should also check whether the joke actually was added to the Data-store
            done();
        });
    })
});