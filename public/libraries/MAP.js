var newScale = 1.0;
var s = 1.0;

var arena = {
  width: 600,
  height: 600,
  color: [100], };

function drawMap() {
  noStroke();
  fill(arena.color);
  rectMode(RADIUS);
  rect(0, 0, arena.width / 2, arena.height / 2);

  if (cSelect == 5) {
    newScale = 0.7;
  } else if (cSelect != 5) {
    newScale = 1.0; }

  s = lerp(s, newScale, 0.1);

}
