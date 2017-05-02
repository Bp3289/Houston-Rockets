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

// var routes = require('./frontend/config/routes');
// app.use(routes);



// app.get('/', function index(req, res){
// 	res.sendFile(__dirname + '/frontend/index.html');
// });


//Get Index
app.get('/players', function show(req,res){
	db.Player.find({}, function(err, rockets){
      //has to be lowercase
      res.json(rockets);
    });
    
});

//Get One
app.get('/players/:id', function show(req, res){

	db.Player.findOne({_id: req.params.id}, function(err, rocket){
		res.json(rocket);
	});
});





app.listen(port, function() {
  console.log('Server started on', port); 
});