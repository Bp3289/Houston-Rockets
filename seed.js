var db = require('./models');



var player_list = [
   
      {
      "name": "James Harden",
      "points": 28
      },
      {
        "name": "Patrick Beverley",
         "points": 15
      },
      {
        "name": "Trevor Ariza",
         "points": 13
      },
      {
        "name": "Nene",
         "points": 13
      },
      {
        "name": "Eric Gordon",
         "points": 17
      },
      {
        "name": "Lou Williams",
         "points": 19
      },
      {
        "name": "Clint Capela",
         "points": 12
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
