
//  N E W   R E V I E W   P O S T   C O N T R O L L E R
//  ===================================================

//  Requires
//  --------
var express = require('express'),
NewReview   = express.Router(),
mongoose = require('mongoose'),
ReviewModel = require('../models/review'),
fs = require('fs');

NewReview.route('/?')
  .get(function(req, res, next) {
    res.render('postreview');
  })

//  Export so the index can access it
//  ---------------------------------
module.exports = NewReview;
