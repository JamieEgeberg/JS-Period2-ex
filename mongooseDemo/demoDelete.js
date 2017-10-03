require('./connection');
// if our user.js file is at app/models/user.js
var User = require('./models/user');

// find the user with id 4
User.findOneAndRemove({ username: 'toDelete' }, function(err) {
    if (err) throw err;
  
    // we have deleted the user
    console.log('User deleted!');
  });