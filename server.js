var express      = require('express');
var app          = express();
var mongoose     = require('mongoose');
var port = process.env.PORT || 3000;

app.use(function (req, res, next) {
res.header('Access-Control-Allow-Origin', "*");
next();
});


var db = require('./models');

app.use(express.static(__dirname + '/frontend/'));

var routes = require('./frontend/config/routes');
app.use(routes);



function getHome(req, res, next){
	res.sendFile(__dirname + '/frontend/index.html');
}


//Get Index
function getAllRockets (req, res, next){
	db.Player.find({}, function(err, rockets){
      //has to be lowercase
      res.json(rockets);
    });
    
}

//Get One
function getOneRocket (req, res, next) {
	db.Player.findOne({_id: req.params.id}, function(err, rocket){
		res.json(rocket);
	});
}



app.listen(port, function() {
  console.log('Server started on', port); 
});