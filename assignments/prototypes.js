/*
  Object oriented design is commonly used in video games.  For this part of the assignment you will be implementing several constructor functions with their correct inheritance hierarchy.

  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.  

  At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  Use the objects at the bottom of the page to test your constructor functions.
  
  Each constructor function has unique properties and methods that are defined in their block comments below:
*/

console.log("---------------Prototypes.js exercises----------------");

/*
  === GameObject ===
  * createdAt
  * name
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method that returns: `${this.name} was removed from the game.`
*/

function GameObject(attributes) {
  this.createdAt = attributes.createdAt;
  this.name = attributes.name;
  this.dimensions = attributes.dimensions;
}

GameObject.prototype.destroy = function() {
  return `${this.name} was removed from the game.`;
}

/*
  === CharacterStats ===
  * healthPoints
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/


function CharacterStats(/*attributes, */childAttributes) {
  GameObject.call(this, childAttributes);
  this.healthPoints = childAttributes.healthPoints;
  this.isAlive = true;
}

CharacterStats.prototype = Object.create(GameObject.prototype);
// CharacterStats.prototype.constructor = CharacterStats; ?????

CharacterStats.prototype.destroy = function() {
  console.log(`${this.name} was removed from the game.`);
  this.isAlive = false;
}

CharacterStats.prototype.takeDamage = function(damage) {
  // return '<object name> took damage.';
    // return `${this.name} took damage.`;
  this.healthPoints -= damage;
  console.log(`${this.name} took ${damage} damage. (${this.healthPoints} health remaining)`);
  // console.log(`(${this.healthPoints} health remaining), this.healthPoints <= 0 = ${this.healthPoints <= 0}`)
  if(this.healthPoints <= 0)
    this.destroy();
}

// var childAttributes = {
//   createdAt: "2019",
//   name: "chicken",
//   dimensions: "40ft",
//   healthPoints: "1"
// }

// const childAttributes = {
//   healthPoints: "1"
// }

// var charStats = new CharacterStats(/*attributes, */childAttributes);

// console.log(charStats.destroy());
// console.log(charStats.dimensions);
// console.log(charStats.createdAt);
// console.log(charStats.healthPoints);
// console.log(charStats.takeDamage());

/*
  === Humanoid (Having an appearance or character resembling that of a human.) ===
  * team
  * weapons
  * language
  * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
  * should inherit destroy() from GameObject through CharacterStats
  * should inherit takeDamage() from CharacterStats
*/
 
function Humanoid(childAttributes) {
  CharacterStats.call(this, childAttributes);
  
  this.team = childAttributes.team;
  this.weapons = childAttributes.weapons;
  this.language = childAttributes.language;
}

Humanoid.prototype = Object.create(CharacterStats.prototype);

Humanoid.prototype.greet = function() {
  return `${this.name} offers a greeting in ${this.language}`;
}


/*this.createdAt = attributes.createdAt;
  this.name = attributes.name;
  this.dimensions = attributes.dimensions; */

// var player1 = new Humanoid({
//   team: "1",
//   weapons: ["rock"],
//   language: ["Orcish"],
//   createdAt: "3000-3-17",
//   dimensions: "2d",
//   name: "xD"
// });

// console.log(player1.team, player1.weapons, player1.language, player1.name, player1.greet(), player1.takeDamage(), player1.destroy());

/*
  * Inheritance chain: GameObject -> CharacterStats -> Humanoid
  * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
  * Instances of CharacterStats should have all of the same properties as GameObject.
*/

// Test you work by un-commenting these 3 objects and the list of console logs below:


  /*const mage = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 1,
      height: 1,
    },
    healthPoints: 5,
    name: 'Bruce',
    team: 'Mage Guild',
    weapons: [
      'Staff of Shamalama',
    ],
    language: 'Common Tongue',
  });

  const swordsman = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 2,
      height: 2,
    },
    healthPoints: 15,
    name: 'Sir Mustachio',
    team: 'The Round Table',
    weapons: [
      'Giant Sword',
      'Shield',
    ],
    language: 'Common Tongue',
  });

  const archer = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    healthPoints: 10,
    name: 'Lilith',
    team: 'Forest Kingdom',
    weapons: [
      'Bow',
      'Dagger',
    ],
    language: 'Elvish',
  });

  console.log(mage.createdAt); // Today's date
  console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
  console.log(swordsman.healthPoints); // 15
  console.log(mage.name); // Bruce
  console.log(swordsman.team); // The Round Table
  console.log(mage.weapons); // Staff of Shamalama
  console.log(archer.language); // Elvish
  console.log(archer.greet()); // Lilith offers a greeting in Elvish.
  console.log(mage.takeDamage()); // Bruce took damage.
  console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.*/


  // Stretch task: 
  // * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.  
  // * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
  // * Create two new objects, one a villain and one a hero and fight it out with methods!

  /*
function Humanoid(childAttributes) {
  CharacterStats.call(this, childAttributes);
  
  this.team = childAttributes.team;
  this.weapons = childAttributes.weapons;
  this.language = childAttributes.language;
}

Humanoid.prototype = Object.create(CharacterStats.prototype);

Humanoid.prototype.greet = function() {
  return `${this.name} offers a greeting in ${this.language}`;
}

*/

function Hero(childAttributes) {
  Humanoid.call(this, childAttributes);
  // this.isAlive = true;
}

Hero.prototype = Object.create(Humanoid.prototype);

// Hero.prototype.destroy = function() {
//   console.log(`${this.name} was removed from the game.`);
//   this.isAlive = false;
// }

// Hero.prototype.takeDamage = function(damage) {
//   this.healthPoints -= damage;
//   console.log(`hero take damage ${this.name} took ${damage} damage (${this.healthPoints} health remaining).`);
//   if(this.healthPoints <= 0)
//     this.destroy;
// }

Hero.prototype.shinKick = function(vill) {
  console.log(`${this.name} used shinkick!`);
  vill.takeDamage(Math.floor(Math.random() * 11));
}

function Villain(childAttributes) {
  Humanoid.call(this, childAttributes);
  // this.isAlive = false;
}

Villain.prototype = Object.create(Humanoid.prototype);

// Villain.prototype.destroy = function() {
//   console.log(`${this.name} was removed from the game.`);
//   // this.isAlive = false;
// }

// Villain.prototype.takeDamage = function(damage) {
//   this.healthPoints -= damage;
//   console.log(`villan take damage ${this.name} took ${damage} damage (${this.healthPoints} health remaining).`);
//   if(this.healthPoints <= 0) {
//     console.log("his.destroy;");
//     this.destroy;
//   }
// }

Villain.prototype.eyeJab = function(hero) {
  console.log(`${this.name} used eyejab!`);
  for(let i = 0; i < 3; i++)
   hero.takeDamage(Math.floor(Math.random() * 4));
}

const sanic = new Hero({
  createdAt: new Date(),
  dimensions: {
    length: 1,
    width: 2,
    height: 3,
  },
  healthPoints: 50,
  name: "sanic",
  team: "team1",
  weapons: [],
  language: "boognish",
});

const eggDude = new Villain({
  createdAt: new Date(),
  dimensions: {
    length: 1,
    width: 2,
    height: 3,
  },
  healthPoints: 50,
  name: "eggDude",
  team: "team0",
  weapons: [],
  language: "portuguese",
});

while(sanic.isAlive && eggDude.isAlive) {
  if(sanic.isAlive && eggDude.isAlive) { //seems redundant
    sanic.shinKick(eggDude);
    eggDude.eyeJab(sanic);
    console.log("\n");
  }
}

if(sanic.isAlive)
  console.log("sanic wins!");
else
  console.log("eggDude wins!");