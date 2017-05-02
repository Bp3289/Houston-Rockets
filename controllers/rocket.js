var db = require('../models');



function getHome(req, res, next){
	res.sendFile(__dirname + '/front/index.html');
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

//Post Game
// function postRocket(req, res, next) {
// 	var newGame = new db.Game({
// 		name: req.body.name
// 	});
// 	newGame.save(function(err, game) {
// 		if (err) {
// 			return console.log("save error: " + err);
// 		}
// 		console.log("saved", game);
// 		res.json(game);
// 	});
// }



module.exports = {
	getHome: getHome,
	getAllRockets: getAllRockets,
	getOneRocket: getOneRocket,
	
};