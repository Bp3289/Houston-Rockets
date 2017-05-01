var db = require('./models');



var player_list = [
   
      {
      "name": "James Harden"
      },
      {
        "name": "Patrick Beverley"
      },
      {
        "name": "Trevor Ariza"
      },
      {
        "name": "Nene"
      },
      {
        "name": "Eric Gordon"
      },
      {
        "name": "Lou Williams"
      },
      {
        "name": "Clint Capela"
      }
    ];





   db.Player.remove({}, function(err, players) {
  console.log('removed all players');
  db.Player.create(player_list, function(err, players){
    if (err) {
      console.log(err);
      return;
    }
    console.log('recreated all players');
    console.log("created", players.length, "players");

    process.exit();
       
          });
        });
