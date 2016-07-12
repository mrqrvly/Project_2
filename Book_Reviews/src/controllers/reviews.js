
//  R E V I E W  C O N T R O L L E R
//  ================================

//  Requires
//  --------
var express     = require('express'),
    Reviews     = express.Router(),
    mongoose    = require('mongoose'),
    ReviewModel = require('../models/review'),
    fs          = require('fs');

Reviews.route('/:id')
  // GET = a single review by id
  .get(function(req, res, next) {
    res.json({message: 'Here is review # ' + req.params.id});
  })
  // PATCH = a single review by id
  .patch(function(req, res, next) {
    res.json({message: 'You updated review # ' + req.params.id});
  })
  // DELETE - a single post by id
  .delete(function(req, res, next) {
    res.json({message: 'You deleted review # ' + req.params.id + '.'});
  })
  
Reviews.route('/?')
  // GET - access complete database of reviews
  .get(function(req, res, next) {
    ReviewModel.find(function(err, reviews) {
      console.log(reviews);
      console.log(err);
      res.render('community');
    })
  })
  

  Reviews.route('/results')
  // POST - add new user record to the database
  .post(function(req, res, next) {
    books.search(req.body.title, function(error, result) {
      if (!error) {
        res.render('results', {'result': result});
      } else {
        console.log(error);
      }
    });
  });

//  Export so the index can access it
//  ---------------------------------
module.exports = Reviews;
