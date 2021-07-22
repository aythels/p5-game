var players = {};

function Player(enemy, testa, testb) {
  this.enemy = enemy;

  if (!enemy) {
    this.pos = createVector(0, 0);
  } else {
    this.pos = createVector(testa, testb);
  }

  this.update = function (action) {
    //movement multiplier depending on item
    this.movement = 3; //* itemStat(cSelect, 'PSpeed');

    //up w
    if (action == 87 && this.pos.y > -300) {
      this.pos.add(0, -this.movement); }

    //down s
    if (action == 83 && this.pos.y < 300) {
      this.pos.add(0, this.movement); }

    //left a
    if (action == 65 && this.pos.x > -300) {
      this.pos.add(-this.movement, 0); }

    //right d
    if (action == 68 && this.pos.x < 300) {
      this.pos.add(this.movement, 0); }

  };

  this.display = function () {

    //weapons
    fill(0);
    noStroke();
    rectMode(CORNER);

    this.angle = atan2(mouseY - height / 2, mouseX - width / 2);
    if (enemy) {
      this.angle = 0 //atan2(mY - height / 2, mX - width / 2);
    }

    push();

    translate(this.pos.x, this.pos.y);
    rotate(this.angle);

    switch (cSelect) {
      case 0:
        ellipse(10, 10, 20, 20);
        break;
      case 1:
        rect(0, -5, 50, 10);
        break;
      case 2:
        rect(0, -5, 70, 10);
        break;
      case 3:
        rect(0, -5, 90, 10);
        break;
      case 4:
        rect(0, -8, 80, 16);
        break;
      case 5:
        rect(0, -6, 130, 12);
        break;}

    pop();

    //body
    noStroke();
    fill(54, 159, 54);
    ellipse(this.pos.x, this.pos.y, 60, 60);

  };


}
