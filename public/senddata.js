//var eventData;
//var bulletData;
var dataToSend = {
  data: {},
};

var framePing = 1;

/*=================
  MAIN HANDLERS
  =================*/

//handles inputs (type is not used)
function eventHandler(event, type) {
  if (!socket.connect) { return; };
  accessDataKey('eventData').push(event);
};

//creates a bullet based on the cursor's location and weapon fired
function bulletHandler() {
  if (!socket.connect) { return; };
  accessDataKey('bulletData').push([cSelect, mouseX, mouseY, player.pos.x, player.pos.y]);
  console.log(mouseX);
};

//**sends data to the server
function emitData() {

  if (!socket.connect) { return; };

  if (isReadyToSend() && isNewData()) { //ping
    socket.emit('playerUpdate', dataToSend.data);
    socket.emit('playerPositionUpdate', player.pos.x, player.pos.y);
    console.log(dataToSend.data);

    clearDataQueue();
  }

};

/*=================
  UTILITY FUNCTIONS
  =================*/

//access nested key of dataToSend.data
function accessDataKey(key) {
  return (dataToSend.data[key] = dataToSend.data[key] || []);
};

//returns the amount of categories of data in dataToSend.data
function dataLength() {
  return Object.keys(dataToSend.data).length; }

//returns true if ping check succeeds
function isReadyToSend() {
  if (frameCount % framePing == framePing - 1) {
    return true; }}

//returns true if there is updated data
function isNewData() {
  if (dataLength() != 0) {
    return true; }};

//clears data queue
function clearDataQueue() {
  delete dataToSend.data;
  dataToSend.data = {};
};
