/* EXAMPLE
let pistol = {
  speed: 360,
  rate: 10,
  curve: 5,
  range: 360,
  maxAmmo: 8,
  pSpeed: 1.0,
};
*/

var firedBullets = [];      //array that holds all fired bullets

function Bullet(gunIndex, owner, mX, mY, userX, userY) {

  //is this bullet fired by the player?
  this.userX = (owner) ? player.pos.x : userX;
  this.userY = (owner) ? player.pos.y : userY;
  this.targetX = (owner) ? mouseX - width / 2 : mX - width / 2;
  this.targetY = (owner) ? mouseY - height / 2 : mY - height / 2;

  //factors that affect bullet tracjectory
  this.speed = itemStat(gunIndex, 'speed');
  this.range = itemStat(gunIndex, 'range');

  //create vectors for the bullet's starting position and it's target direction
  this.pos = createVector(0, 0);
  this.vel = createVector(this.targetX,  this.targetY);

  //this.vel.sub(this.pos);     //if this.pos is not (0,0)
  this.vel.setMag(this.speed);

  //update the movement of the bullet on each tick
  this.update = function () {

    //if bullet has reached end of path, delete it
    if (this.pos.mag() > this.range) {
      firedBullets.splice(firedBullets.indexOf(this), 1);
      return;
    }

    //move bullet on each tick
    this.pos.add(this.vel);

    //display bullet
    this.display();

  };

  //displays the bullet
  this.display = function () {
    fill(0);

    push();

    translate(this.userX, this.userY);
    ellipse(this.pos.x, this.pos.y, 7, 7);

    pop();

  };

}
