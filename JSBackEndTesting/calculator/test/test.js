var calc = require('../lib/calculator');
var mocha = require('mocha');

var assert = require('assert');
describe('calc', function () {
    describe('divide()', function () {
        it('should throw error when dividing by 0', function () {
            assert.throws(() => calc.divide(5, 0), "Attempt to divide by zero");
        });
    });
});