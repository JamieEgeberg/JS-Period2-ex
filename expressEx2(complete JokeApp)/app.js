var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require("express-session");

var index = require('./routes/index');
var joke = require('./routes/joke');
var allJokes = require('./routes/allJokes');
var addJoke = require('./routes/addJoke');
var storeJoke = require('./routes/storeJoke');
var login = require('./routes/login');
var rest = require('./routes/rest');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({ secret: 'secret_3162735', saveUninitialized: true, resave: true }));

app.use(function (req, res, next) {
  console.log(req.url.substring(0, 5));
  if (req.url.startsWith('/api/')) {
    console.log('success');
    next();
  }
  else if (req.session.userName) {
    next();
  }
  else if (req.body.userName) {
    req.session.userName = req.body.userName;
    next();
  }
  else {
    req.url = "/login"; //We will create this page in the next step
    return next();
  }
});

app.use('/', index);
app.use('/joke', joke);
app.use('/alljokes', allJokes);
app.use('/addjoke', addJoke);
app.use('/storejoke', storeJoke);
app.use('/login', login);
app.use('/api', rest);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
