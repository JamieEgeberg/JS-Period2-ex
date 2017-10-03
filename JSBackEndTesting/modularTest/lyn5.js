var util = require('./lyn5util.js');

var dirname = process.argv[2];
var ext = process.argv[3];

util(dirname, ext, function (err, files) {
  if (err) throw err;
  files.forEach((element) =>
    console.log(element.toString())
  );
});