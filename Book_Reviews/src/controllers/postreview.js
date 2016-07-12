
//  N E W   R E V I E W   P O S T   C O N T R O L L E R
//  ===================================================

//  Requires
//  --------
var express = require('express'),
NewReview   = express.Router(),
mongoose    = require('mongoose'),
ReviewModel = require('../models/review'),
fs          = require('fs');

NewReview.route('/?')
  .get(function(req, res, next) {
    for (var book in result) {
      console.log(result[book].title);
      console.log('-------------------------');
    }
    console.log(user._id);
    res.render('postreview');
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
module.exports = NewReview;
