require('./connection');
// if our user.js file is at app/models/user.js
var User = require('./models/user');

// create a new user
var newUser = User({
    name: 'Peter Quill',
    username: 'starlord55',
    password: 'password',
    admin: true
});

// save the user
newUser.save(function (err) {
    if (err) throw err;

    console.log('User created!');
});

// create a new user
var toDelete = User({
    name: 'toDelete',
    username: 'toDelete',
    password: 'toDelete',
    admin: true
});

// save the user
toDelete.save(function (err) {
    if (err) throw err;

    console.log('User created!');
});