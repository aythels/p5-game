console.log('Starting Application');

/*
=================
SETUP
=================
*/

var express = require('express');
var app = express();

var port = process.env.PORT || 3000;
var server = app.listen(port);

app.use(express.static('public'));

var socket = require('socket.io');
var io = socket(server);

/*
=================
SERVER RELATE STUFF
=================
*/

var globalPlayerList = {};

//on each connection
io.on('connection', function (socket) {

  //alert server console on connection
  console.log(
              'New Connection: ' + socket.id + ' | ' +
              'Current Players: ' + (Object.keys(globalPlayerList).length + 1)
              );

  //sends the current list to the player
  socket.emit('currentPlayers', globalPlayerList);

  //creates an identifier for each player and add to the global list
  globalPlayerList[socket.id] = {
    name: socket.id,
    pos: [0, 0],
    health: 100,
    shield: 0,
  };

  //on connection
  socket.broadcast.emit('newPlayerInit', socket.id);

  //on recieving data
  socket.on('playerUpdate', function (data) {

    //if bullet data exists, send it to the players
    if (data.bulletData != null) {
      socket.broadcast.emit('firedBullets', data.bulletData);
      //console.log('recieved Data' + data.bulletData);
    }

    if (data.eventData != null) {
      socket.broadcast.emit('playerInput', data.eventData, socket.id);
      //console.log('recieved Data' + data.bulletData);
    }

  });

  socket.on('playerPositionUpdate', function (data1, data2) {
    globalPlayerList[socket.id].pos[0] = data1;
    globalPlayerList[socket.id].pos[1] = data2;
  });

  //on each player disconnection, edit global list and notify others
  socket.on('disconnect', function () {

    delete globalPlayerList[socket.id];
    console.log('User: ' + socket.id + ' disconnected' + ' | ' +
                'Remaining players: ' + Object.keys(globalPlayerList).length
                );

    //notify others
    socket.broadcast.emit('playerDisconnect', socket.id);

  });

});

var count = 1;
