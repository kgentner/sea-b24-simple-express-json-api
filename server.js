'use strict';
var express = require('express');
var moment = require('moment');
var app = express();
var port = process.env.PORT || 8080;

app.get('/', function(req, res){
  res.json(moment().format('MMMM Do YYYY, h:mm'));
});

//With help from the following:
//https://blog.safaribooksonline.com/2014/03/13/parameterized-routes-express-js/
app.get('/:username', function(req, res) {
  var user = req.params.username;
  res.json({'msg' : 'Hello ' + user + '!'});
});

app.listen(port);
console.log('Server running on port: ' + port);
module.exports = app;

