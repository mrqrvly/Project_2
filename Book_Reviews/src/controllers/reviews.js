
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
      res.json(reviews);
    })
  })
  // POST - add new review to the database
  .post(function(req, res, next) {
    ReviewModel.create({title: 'This book was good.', content: 'I read this book recently and it was very good. It was well written and the story was engaging. You will probably like it too.', userid: 'abc123'}, function(err, review) {
      console.log(review);
      console.log(err);
      res.json(review);
    })
  })

//  Export so the index can access it
//  ---------------------------------
module.exports = Reviews;
