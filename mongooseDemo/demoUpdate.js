require('./connection');
// if our user.js file is at app/models/user.js
var User = require('./models/user');

User.findById('59cb7501860aa776645427ba', function(err, user) {
    if (err) throw err;
  
    // change the users location
    user.location = 'uk';
  
    // save the user
    user.save(function(err) {
      if (err) throw err;
  
      console.log('User successfully updated!');
    });
  
  });



/* // find the user starlord55
// update him to starlord 88
// find the user with id 4
// update username to starlord 88
User.findByIdAndUpdate('59cb7501860aa776645427ba', { username: 'starlord88' }, function(err, user) {
    if (err) throw err;
  
    // we have the updated user returned to us
    console.log(user);
  }); */