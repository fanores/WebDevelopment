/* JavaScript Conditionals. */

var name1 = prompt("Name1:");
var name2 = prompt("Name2:");
var prc = (Math.random() * 100) + 1;
prc = Math.floor(prc);

if (prc > 70) {
    alert("The chance is: " + prc + "%" + " PERFECT!");
}


if (prc > 30 && prc <= 70) {
    alert("The chance is: " + prc + "%" + " AVERAGE!");
}

if (prc <= 30) {
    alert("The chance is: " + prc + "%" + " LOW!");
}
