
//  H O M E   C O N T R O L L E R
//  =============================

var express       = require('express'),
    SplashControl = express.Router(),
    UserModel     = require(__dirname + '/../models/user'),
    bcrypt        = require('bcrypt');

// SplashControl.route('/usersonly/?')
//   .get(function(req, res, next) {
//     res.send('Users only page!');
//   });

  SplashControl.route('/?')
    // GET - renders splash page
    .get(function(req, res, next) {
      res.render('splash', {});
    });

    SplashControl.route('/signup')
    // POST - username and password to the new account form
    .post(function(req, res, next) {
      console.log('You tried a post');
      bcrypt.hash(req.body.password, 10, function(err, hash) {
        UserModel.create({
          username: req.body.username,
          password: hash
        }, function(err, user) {
          if (err) {
            console.log(err);
            res.render('splash', {error:err});
          } else {
            req.session.isLoggedIn = true;
            req.session.userID     = user._id;
            console.log(user._id);
            res.redirect('/users/' + user.id);
          }

        })
        console.log('Posting to the splash page worked.');
      });
    });

  SplashControl.route('/login')
  // POST - username and password to the login form
  .post(function(req, res, next) {
    console.log('You tried a post');
    UserModel.findOne({username: req.body.username}, function(error, user) {
      if (error || !user) {
        res.send('Could not find that user.');
      } else {
        bcrypt.compare(req.body.password, user.password, function(err, result) {
          if (err) {
            res.send ('ERROR: ' + err);
          } else if (result) {
            req.session.isLoggedIn = true;
            req.session.userID     = user._id;
            console.log(user._id);
            res.redirect('/users/' + user._id);
          } else {
            res.send ('Wrong password!')
          }
        })
      }
    })
  })

module.exports = SplashControl;
