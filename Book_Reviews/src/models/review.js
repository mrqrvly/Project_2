
//  P O S T   R E S O U R C E
//  =========================

//  Requires Mongoose
//  -----------------
var mongoose = require('mongoose');

//  Define the post resource model
//  ------------------------------
var PostSchema = new mongoose.Schema( {
  userid:  String,
  title:   String,
  content: String,
});

//  Declare Post as a model and attach the schema to it
//  ---------------------------------------------------
module.exports = mongoose.model('Post', PostSchema)
