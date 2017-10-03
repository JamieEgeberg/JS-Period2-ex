require('./connection');
// if our user.js file is at app/models/user.js
var User = require('./models/user');

// get all the users
User.find({}, function (err, users) {
    if (err) throw err;

    // object of all the users
    console.log('Find all:');
    console.log(users);
});

// get the user Crezz
User.find({ username: 'Crezz' }, function (err, user) {
    if (err) throw err;

    // object of the user
    console.log('Find one:');
    console.log(user);
});

// get a user with ID of 1
User.findById('59cb6364cf07e6724c53b78a', function (err, user) {
    if (err) throw err;

    // show the one user
    
    console.log('Find by ID:');
    console.log(user);
});