
//  L O C A L   S E R V E R   F I L E
//  =================================

//  Dependencies
//  ------------
var express    = require('express'),
    app        = express(),
    exphbs     = require('express-handlebars'),
    fs         = require('fs'),
    bodyParser = require('body-parser'),
    session    = require('express-session');

//  Setup handlebars view engine
//  ----------------------------
app.engine('hbs', exphbs( {
  defaultLayout: 'main',
  partialsDir:   __dirname + '/views/partials',
  layoutsDir:    __dirname + '/views/layouts',
  extname:       '.hbs',
}));
app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');
app.use(bodyParser.urlencoded({extended: true}))

//  Configures a user session
app.use(session({
  name:              'revlitbks',
  resave:            false,
  saveUninitialized: false,
  secret:            'q9845i34nqf9483ut943jfai'
}));

//  Serviing static files
//  ---------------------
app.use(express.static(__dirname + '/public'));

//  Find and link up the database
//  -----------------------------
require('./db/database');

//  Mount the controllers for use
//  -----------------------------
app.use('/splash/?', require('./controllers/splash'));
app.use('/users/?', require('./lib/access_control'));
app.use('/users/?', require('./controllers/users'));
app.use('/postreview/?', require('./lib/access_control'));
app.use('/postreview/?', require('./controllers/postreview'));
app.use('/reviews/?', require('./lib/access_control'));
app.use('/reviews/?', require('./controllers/reviews'));


app.route('/whatever/:id/?')
   .get(function(req, res, next) {
    req.originalParam = req.params.id;
    req.params.id = 'Go fuck yourself';
    next();
  }, function(req, res, next) {
    console.log('I made it hang...');
    res.send('The original param was: ' + req.originalParam + '. It is now: ' + req.params.id);
  });


app.route('/whatever/?')
  .get(function(req, res, next) {
    req.mySpecialProp = 'Unicorns';
    next();
  }, function(req, res, next) {
    if (req.mySpecialProp && req.mySpecialProp === 'Unicorns') {
      console.log(req.mySpecialProp, '<----------- LOOK HERE!');
    }
    next();
  }, function(req, res, next) {
    console.log('I made it hang...');
    res.send('We made it through 3 middleware. The special prop is: ' + req.mySpecialProp);
  });


//  Start the server and listen at local port
//  -----------------------------------------
var server = app.listen(2666, function() {
  console.log('Server listening at http://localhost:' + server.address().port);
});
