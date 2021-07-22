/*=================
  ON STARTUP
  =================*/

function setup() {

  //connect to the server
  socket = io.connect();
  console.log(socket.connected);

  //create player object and weapons handler for user
  player = new Player();
  itemMan = new ItemMan();

  //canvas setup settings
  var screen = createCanvas(windowWidth, windowHeight);
  screen.style('display', 'block');
  cursor(CROSS);

  //load any images
  loadImages();

  //recieve server data
  recieveServerData();

}

/*=================
  ON EACH TICK
  =================*/

function draw() {
  background(200);

  // 0, 0 becomes the coordinates of the center and screen moves according to player
  translate(width / 2 - player.pos.x, height / 2 - player.pos.y);

  push();

  scale(s);

  translate(-player.pos.x * (s - 1) * 2, -player.pos.y * (s - 1) * 2);

  drawMap();      //displays map

  for (var i = 0; i < firedBullets.length; i++) {     //displays bullets
    firedBullets[i].update();}

  player.display();     //displays players

  for (var i = 0; i < Object.keys(players).length; i++) {
    players[Object.keys(players)[i]].display();
  }

  pop();

  itemMan.update();

  //draw interfaces
  drawInterfaces();

  //check for player action
  eventListener();

  //emit data to server and hence other players
  emitData();

};

function drawInterfaces() {
  drawHealthBar();
  drawShieldBar();
  drawHotbar();
  drawReloadBar();
}

function loadImages() {}

function eventListener() {
  //w
  if (keyIsDown(87)) {
    player.update(87);
    eventHandler(87, 'KEY');
  }

  //s
  if (keyIsDown(83)) {
    player.update(83);
    eventHandler(83, 'KEY');
  }

  //a
  if (keyIsDown(65)) {
    player.update(65);
    eventHandler(65, 'KEY');
  }

  //d
  if (keyIsDown(68)) {
    player.update(68);
    eventHandler(68, 'KEY');
  }

  //r
  if (keyIsDown(82)) {
    itemMan.reloadQueue = cSelect;
  }

  //gun
  if (mouseIsPressed) {
    itemMan.trigger();}

}
