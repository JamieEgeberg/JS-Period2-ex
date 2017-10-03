var fs = require('fs');
var path = require('path');

module.exports = function (dirname, ext, callback) {
    var extension = "." + ext;
    fs.readdir(dirname, function (err, files) {
        if (err) {
            callback(err, null);
        }
        else {
            files = files.filter(file => path.extname(file) === "." + ext);
            callback(null, files);
            /* result = [];
            files.forEach(function(entry) {
              if (path.extname(entry) == extension) {
                result.push(entry);
              }
            });
             callback(null, result);*/
        }
    });

};
