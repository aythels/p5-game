var cSelect = 1;

function ItemMan() {
  this.fireDelay = 0;

  /*=================
    Activated when left clicked
    =================*/

  this.trigger  = function () {

      //trigger only works on ranged weapons
      if (itemStat(cSelect, 'class') != 'melee') {

        //checks if magazine needs to be loaded
        if (invItemArray(cSelect).length == 0) {
          this.reloadQueue = cSelect;

        //remove bullets from magazine and init new bullet object
        } else if (this.fireDelay + itemStat(cSelect, 'rate') - frameCount < 0) {

          invItemArray(cSelect).pop();

          //console.log(invItemArray(cSelect));
          firedBullets.push(new Bullet(cSelect, true));

          //tells the server that a bullet has been fired
          bulletHandler();

          //console.log(firedBullets);
          this.fireDelay = frameCount;

        }
      }
    };

  /*=================
    Reload on each Tick
    =================*/

  this.update = function () {

    if (this.reloadQueue != null && this.reloadDelay == null) {
      this.reloadDelay = frameCount; }

    if (this.reloadQueue == cSelect) {
      this.reload();

    } else if (this.reloadQueue != cSelect) {
      this.reloadQueue = null;
      this.reloadDelay = null;
    }

  };

  this.reload = function () {
    this.reloadP = 1 - (this.reloadDelay + itemStat(cSelect, 'reloadRate') - frameCount) / itemStat(cSelect, 'reloadRate');

    if (this.reloadDelay + itemStat(cSelect, 'reloadRate') - frameCount < 0) {

      var c = invItemArray(cSelect).length;
      for (var i = 0; i < itemStat(cSelect, 'maxAmmo') - c; i++) {
        invItemArray(cSelect).push(i);}

      this.reloadQueue = null;

    }

  };

};
