
//  H O M E   C O N T R O L L E R
//  =============================

var express     = require('express'),
    HomeControl = express.Router(),
    UserModel   = require(__dirname + '/../models/user'),
    bcrypt      = require('bcrypt');

HomeControl.route('/usersonly/?')
  .get(function(req, res, next) {
    res.send('Users only page!');
  });

  HomeControl.route('/?')
    .get(function(req, res, next) {
      res.render('splash', {});
    })

    .post(function(req, res, next) {
      bcrypt.hash(req.body.password, 10, function(err, hash) {
        User.create({
          username: req.body.username,
          password: hash,
        }, function(err, user) {
          if (err) {
            console.log(err);
          } else {
            res.redirect('/usersonly');
          }
        });
      });
    });

module.exports = HomeControl;
