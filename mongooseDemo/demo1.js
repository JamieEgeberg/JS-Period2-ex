require('./connection');
// if our user.js file is at app/models/user.js
var User = require('./models/user');

// create a new user called chris
var jimbo = new User({
    name: 'Crezz',
    username: 'Crezz',
    password: 'Crezz!'
});

// call the custom method. this will just add -dude to his name
// user will now be Chris-dude
jimbo.dudify(function (err, name) {
    if (err) throw err;

    console.log('Your new name is ' + name);
});

// call the built-in save method to save to the database
jimbo.save(function (err) {
    if (err) throw err;

    console.log('User saved successfully!');
});
// get all the users
User.find({}, function (err, users) {
    if (err) throw err;

    // object of all the users
    console.log(users);
});