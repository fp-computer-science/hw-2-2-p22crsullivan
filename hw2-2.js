// Author: CRS 2/8/2021
var attack = 20;
var defense = 20;
var enemyCount = 3;
var warriorAttack;
var mageAttack;
var rangerAttack;
var warriorDefense;
var mageDefense;
var rangerDefense;
var warriorAttack = attack - 2;
var warriorDefense = defense * 2;
var rangerAttack = attack * 3;
var rangerDefense = defense - 1;
var mageAttack = enemyCount ** attack;
var mageDefense = defense / enemyCount;
console.log("The warrior's attack is:" + warriorAttack + "and the warrior's defense is:" + warriorDefense +);
console.log("The ranger's attack is:" + rangerAttack + "and the ranger's defense is:" + rangerDefense +);
console.log("The mage's attack is:" + mageAttack + "and the mage's defense is:" + mageDefense +);