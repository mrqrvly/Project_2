
//  D A T A B A S E
//  ===============

//  Require Mongoose
//  ----------------
var mongoose = require('mongoose');

//  Location of the database
//  ------------------------
var connectionString = process.env.NODE_ENV === 'production' ? 'mongodb://revnotes_db:7625robmar8290@ds011890.mlab.com:11890/revnotes_db' :
'mongodb://localhost/users';

//  Connect to the database
//  -----------------------
mongoose.connect(connectionString);

//  Alert when connected
//  --------------------
mongoose.connection.on('connected', function() {
  console.log('Mongoose is connected at ' + connectionString + '.');
});

//  Alert when error occurs
//  -----------------------
mongoose.connection.on('error', function() {
  console.log('Mongoose connction error: ' + error);
});

//  Alert when mongoose disconnects
//  -------------------------------
mongoose.connection.on('disconnected', function() {
  console.log('Mongoose disconnected.');
});
