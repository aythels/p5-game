function recieveServerData() {

  socket.on('currentPlayers', function (list) {

    for (var i = 0; i < Object.keys(list).length; i++) {
      players[Object.keys(list)[i]] = new Player(true, list[Object.keys(list)[i]].pos[0], list[Object.keys(list)[i]].pos[1]);
    }

  });

  //create a new player object when that player joins the game
  socket.on('newPlayerInit', function (id) {
    players[id] = new Player(true); });

  //recieve data from server
  socket.on('firedBullets', function (data) {

    //create new bullet objects
    for (var i = 0; i < data.length; i++) {
      firedBullets.push(new Bullet(data[i][0], false, data[i][1], data[i][2], data[i][3], data[i][4]));
      console.log(data[i][1]);
  }

  });

  socket.on('playerInput', function (data, id) {
    console.log('Enemy: ' + id + 'Moved: ' + data);
    //console.log(Object.keys(players));
    //send inputs to player model

    for (var i = 0; i < data.length; i++) {
      players[id].update(data[i]);
      console.log(data[i]);
    }

  });

  socket.on('playerDisconnect', function (id) {
    delete players[id];
  });

};
