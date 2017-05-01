var db = require('../models');


//Get Index
function getRockets (req, res, next){
	db.Rocket.find({}, function(err, rockets){
      //has to be lowercase
      res.json(rockets);
    });
    
}

//Get One
function getOneRocket (req, res, next) {
	db.Rocket.findOne({_id: req.params.id}, function(err, rocket){
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
	getRockets: getRockets,
	getOneRocket: getOneRocket,
	
};