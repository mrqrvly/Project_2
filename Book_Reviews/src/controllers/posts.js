
//  P O S T   C O N T R O L L E R
//  =============================

//  Requires
//  --------
var express  = require('express'),
    Posts    = express.Router(),
    mongoose = require('mongoose'),
    Post     = require('../models/post'),
    fs       = require('fs');

Posts.route('/:id')
  // DELETE - a single post by id
  .delete(function(req, res, next) {
    
  })

//  Export so the index can access it
//  ---------------------------------
module.exports = Posts;
