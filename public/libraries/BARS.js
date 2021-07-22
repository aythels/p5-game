var health;
var shield;

function drawHealthBar() {
  noStroke();
  rectMode(CORNER);
  fill(55, 55, 55);
  rect(width / 2 - 500 + player.pos.x, height / 2 - 40 + player.pos.y, 200, 20); //grey bar
  fill(0, 204, 0);
  rect(width / 2 - 500 + player.pos.x, height / 2 - 40 + player.pos.y, 2 * health, 20); //green bar
  fill(0);
  //text(health, width / 2 - 250 + player.pos.x, height / 2 - 40 + player.pos.y); //health value

}

function drawShieldBar() {
  noStroke();
  rectMode(CORNER);
  fill(55, 55, 55);
  rect(width / 2 - 500 + player.pos.x, height / 2 - 70 + player.pos.y, 200, 20); //grey bar
  fill(26, 163, 255);
  rect(width / 2 - 500 + player.pos.x, height / 2 - 70 + player.pos.y, 2 * shield, 10); //blue bar
  fill(0);
  //text(shield, width / 2 - 250 + player.pos.x, height / 2 - 70 + player.pos.y); //text

}

function drawReloadBar() {
  if (itemMan.reloadQueue && itemMan.reloadDelay != null) {
    noStroke();
    rectMode(RADIUS);
    fill(55, 55, 55);
    rect(player.pos.x, height / 2 + player.pos.y - 100, length, 5);
    fill(204, 102, 255);
    rect(player.pos.x, height / 2 + player.pos.y - 100, Math.min(length, length * itemMan.reloadP), 5);
  }
}
