var util = require('./lyn5util.js');
const fs = require('fs');

var dirname = './testDir';
var ext = 'js';
var filename = 'file.' + ext;

before(function () {
    fs.mkdirSync(dirname);
    fs.writeFileSync(dirname + '/' + filename);

});
after(function () {
    fs.unlinkSync(dirname + '/' + filename);
    fs.rmdirSync(dirname);
})

describe('util()', function () {
    it('should do the stuff', function (done) {
        util(dirname, ext, function (err, files) {
            files.forEach((element) => {
                console.log(element.toString());
            });
            done();
        });
    })
});