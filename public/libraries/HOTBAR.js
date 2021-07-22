var items = 6;
var length = 240;

function drawHotbar() {
  this.segment = length / items;

  //background
  noStroke();
  fill(55, 55, 55);
  rectMode(RADIUS);
  rect(player.pos.x, height / 2 + player.pos.y - 45, length, 40);

  //selector
  this.slotXCenter = player.pos.x - length + this.segment + this.segment * cSelect * 2;
  this.slotXCenter2 = player.pos.x - length + this.segment;

  strokeWeight(4);
  stroke(255);
  fill(255, 255, 255, 0);
  rect(this.slotXCenter, height / 2 + player.pos.y - 45, 35, 35);

  //text
  strokeWeight(1);
  textAlign(CENTER);
  text('hands', this.slotXCenter2  + this.segment * 0 * 2, height / 2 - 40 + player.pos.y);
  text('pistol', this.slotXCenter2  + this.segment * 1 * 2, height / 2 - 40 + player.pos.y);
  text(invItemArray(1).length + '/8', this.slotXCenter2  + this.segment * 1 * 2, height / 2 - 20 + player.pos.y);
  text('smg', this.slotXCenter2  + this.segment * 2 * 2, height / 2 - 40 + player.pos.y);
  text(invItemArray(2).length + '/30', this.slotXCenter2  + this.segment * 2 * 2, height / 2 - 20 + player.pos.y);
  text('assault', this.slotXCenter2  + this.segment * 3 * 2, height / 2 - 40 + player.pos.y);
  text(invItemArray(3).length + '/25', this.slotXCenter2  + this.segment * 3 * 2, height / 2 - 20 + player.pos.y);
  text('shotgun', this.slotXCenter2  + this.segment * 4 * 2, height / 2 - 40 + player.pos.y);
  text(invItemArray(4).length + '/2', this.slotXCenter2  + this.segment * 4 * 2, height / 2 - 20 + player.pos.y);
  text('sniper', this.slotXCenter2  + this.segment * 5 * 2, height / 2 - 40 + player.pos.y);
  text(invItemArray(5).length + '/5', this.slotXCenter2  + this.segment * 5 * 2, height / 2 - 20 + player.pos.y);

}

function mouseWheel(event) {
  if (event.delta > 0 && cSelect != 5) {
    cSelect++;
  } else if (event.delta < 0 && cSelect != 0) {
    cSelect--; }
}
