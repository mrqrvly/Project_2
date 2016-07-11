
//  U S E R   C O N T R O L L E R
//  =============================

//  Requires
//  --------
var express   = require('express'),
    Users     = express.Router(),
    mongoose  = require('mongoose'),
    UserModel = require('../models/user'),
    fs        = require('fs');

Users.route('/:id')
  // GET - a single resource by id
  .get(function(req, res, next) {
    res.json({message: 'Here is user ' + req.params.id});
  })
  // PATCH - a single resource by id
  .patch(function(req, res, next) {
    res.json({message: 'You updated user ' + req.params.id + '.'});
  })
  // DELETE - a single resource by id
  .delete(function(req, res, next) {
    res.json({message: 'You deleted user ' + req.params.id + '.'});
  })

Users.route('/?')
  // GET - access complete database of users
  .get(function(req, res, next) {
    UserModel.find(function(err, users) {
      console.log(users);
      console.log(err);
      res.json(users);
    })
  })
  // POST - add new user record to the database
  .post(function(req, res, next) {
    UserModel.create({username: 'mreading', password: '123450', firstname: 'mac', lastname: 'reading', email: 'mread@ing.com'}, function(err, user) {
      console.log(user);
      console.log(err);
      res.json(user);
    })
  })

//  Export so the index can access it
//  ---------------------------------
module.exports = Users;
