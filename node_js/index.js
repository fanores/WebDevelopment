//jshint esversion:6

var superheroes = require('superheroes');
var supervillains = require('supervillains');

var mySuperheroName = superheroes.random();
console.log('Superhero: ' + mySuperheroName);

var mySupervillainName = supervillains.random();
console.log('Supervillain: ' + mySupervillainName);
