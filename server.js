var express      = require('express');
var app          = express();
var mongoose     = require('mongoose');


var db = require('./models');


var routes = require('./config/routes');
app.use(routes);



app.listen(process.env.PORT || 3000, function () {
  console.log('Example app listening at https://localhost:3000/');
});