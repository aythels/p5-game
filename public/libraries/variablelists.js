//each individual item
let fists = {
  type: 'melee',
  speed: 10,
  rate: 10,
  maxAmmo: -1,
  PSpeed: 1.0,
  dPSpeed: 1.0,
  damage: 20,
  armorPen: 1.0,
  critBonus: 1.4,
  critChance: 5, };

let pistol = {
  class: 'autoRanged', //different bullet mechanics based on class (melee, sinRanged, autoRanged)
  speed: 15, //bullet travel speed
  rate: 10, //tick delay between fires (60 = 1 second)
  reloadRate: 30, //tick delay between reloads
  curve: 5, //bloom degrees
  range: 500, //bullet travel range
  maxAmmo: 8, //maximum magazine ammo
  PSpeed: 1.0, //speed multiplier when carrying
  rPSpeed: 1.0, //speed multiplier when reloading
  dPSpeed: 1.0, //speed multiplier when shot
  damage: 25, //damage on hit (players can have maximum of 100 health + 100 shield)
  armorPen: 1.1, //bonus damage multiplier towards shield
  critBonus: 1.2, //bonus damage multiplier when crited
  critChance: 2, }; //percentage chance of criting

let smg = {
  class: 'autoRanged',
  speed: 20,
  rate: 5,
  reloadRate: 50,
  curve: 5,
  range: 600,
  maxAmmo: 30,
  PSpeed: 1.2,
  rPSpeed: 1.2,
  dPSpeed: 1.0,
  damage: 20,
  armorPen: 1.0,
  critBonus: 1.1,
  critChance: 1, };

let assault = {
  class: 'autoRanged',
  speed: 20,
  rate: 7,
  reloadRate: 60,
  curve: 5,
  range: 800,
  maxAmmo: 25,
  PSpeed: 1.1,
  rPSpeed: 1.1,
  dPSpeed: 1.0,
  damage: 35,
  armorPen: 1.3,
  critBonus: 1.3,
  critChance: 3, };

let shotgun = {
  class: 'sinRanged',
  speed: 20,
  rate: 15,
  reloadRate: 20,
  curve: 5,
  range: 300,
  maxAmmo: 2,
  PSpeed: 0.9,
  rPSpeed: 0.9,
  dPSpeed: 1.0,
  damage: 10,
  armorPen: 1.5,
  critBonus: 1.3,
  critChance: 20, };

let sniper = {
  class: 'autoRanged',
  speed: 30,
  rate: 20,
  reloadRate: 100,
  curve: 2,
  range: 1000,
  maxAmmo: 5,
  PSpeed: 0.8,
  rPSpeed: 0.8,
  dPSpeed: 1.0,
  damage: 90,
  armorPen: 1.5,
  critBonus: 1.5,
  critChance: 30, };

//list of all weapons and their stats
var itemList = {
  fists: fists,
  pistol: pistol,
  smg: smg,
  assault: assault,
  shotgun: shotgun,
  sniper: sniper, };

//PLayer's personal inventory list
var playerInv = {};

//create an array for each weapon in player's inventory
for (var i in Object.keys(itemList)) {
  playerInv[Object.keys(itemList)[i]] = []; }

//reload each weapon in player's inventory on start.
for (var a = 0; a < invLength(); a++) {
  for (var i = 0; i < itemStat(a, 'maxAmmo'); i++) {
    invItemArray(a).push(i);}}

//************UTILITY*************

//returns number of items in inventory
function invLength() {
  return Object.keys(playerInv).length; };

//obtain characteristic of item
function itemStat(index, stat) {
  return (itemList[Object.keys(itemList)[index]][stat]); };

//access item array in inventory
function invItemArray(index) {
  return playerInv[Object.keys(itemList)[index]]; };
