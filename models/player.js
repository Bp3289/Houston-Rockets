var mongoose = require('mongoose'),
  Schema = mongoose.Schema;



var PlayerSchema = new Schema({
   name: String,
   points: Number,
  });


var Player = mongoose.model('Player', PlayerSchema);
module.exports = Player;