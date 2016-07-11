
//  L O G I N   C O N T R O L L E R
//  ===============================

var express      = require('express'),
    LoginControl = express.Router(),
    bcrypt       = require('bcrypt'),
    UserModel    = require(__dirname + '/../models/user');

LoginControl.route('/?')
  .get(function(req, res, next) {
    res.render('login,', {
      // csrfToken: req.csrf()
    });
  })
  .post(function(req, res, next) {
    User.findOne({username: req.body.username}, function(error, user) {
      if (error || !user) {
        res.send('Could not find user');
      } else {
        bcrypt.compare(req.body.password, user.password, function(err, result) {
          if (err) {
            res.send('ERROR: ' + err);
          } else if (result) {
            res.redirect('/usersonly');
          } else {
            res.send('Wrong password!')
          }
        })
      }
    })
  })

  module.exports = LoginControl;
