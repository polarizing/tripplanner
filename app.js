
// Dependencies
var Express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var swig = require('swig');

// Require routes.
var router = require('./routes');

// Initialize Express
var app = new Express();

// Configure templating engine.
app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
swig.setDefaults({ cache: false});

app.listen(process.env.PORT || 3000);

// Catch all incoming connections [MW]
app.use(function(req, res, next) {
	console.log(req.method, req.path, res.statusCode);
	next();
})

app.use('/', router);

app.use(Express.static(__dirname + '/public'));
app.use(Express.static(__dirname + '/node_modules/bootstrap/dist'));
app.use(Express.static(__dirname + '/node_modules/jquery/dist'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  console.error(err);
  res.render('error', {});
});
