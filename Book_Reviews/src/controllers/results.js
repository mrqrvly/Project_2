
//  S E A R C H   R E S U L T S   C O N T R O L L E R
//  ==================================================

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
    res.render('results');
  })

//  Export so the index can access it
//  ---------------------------------
module.exports = NewReview;
