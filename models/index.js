var mongoose = require('mongoose');
mongoose.connect( process.env.MONGODB_URI || 
                  process.env.MONGOLAB_URI || 
                  process.env.MONGOHQ_URL || 
					'mongodb://localhost/rockets');




module.exports.Player = require('./player.js');


