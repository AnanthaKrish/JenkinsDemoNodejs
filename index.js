var express = require('express');
var app = express();
var exports = module.exports = {};

app.get('/', function(req, res){
  res.send('Hello World');
});

var server = app.listen(8000, function(){
  console.log('Magic is happening on port 8000');
});

exports.closeServer = function(){
  server.close();
};