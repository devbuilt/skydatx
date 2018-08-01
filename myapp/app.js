var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var nodemailer = require('nodemailer');
var compression = require('compression');
var index = require('./routes/index');
var videos = require('./routes/custom-aerial-videos');
var photography = require('./routes/aerial-photography');
var realestate = require('./routes/custom-realestate-videos');
var about = require('./routes/about');
var contact = require('./routes/contact');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(compression());
app.use(express.static('public'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));


app.use('/', index);
app.use('/custom-aerial-videos', videos);
app.use('/aerial-photography', photography);
app.use('/custom-realestate-videos',realestate);
app.use('/about', about);
app.use('/contact', contact);

// get Contact Us
app.post('/about', function(req, res, next){
  var api_key = '';
  var domain = '';
  var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});

    var data = {
      from: req.body.userEmail + ' ' + '',
      to: '',
      subject:'Skydatx Inquiry',
      name: req.body.body,
      text: req.body.body
    };

    mailgun.messages().send(data, function(error, body) {
      console.log(body);
      if(!error)
          res.render('/about');
      else
          res.send("Mail not Sent!");
    });
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
