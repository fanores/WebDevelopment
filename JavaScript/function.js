/* Simple function call. */
function printSomething() {
    console.log("ach jaj");
}

printSomething();


/* Another example. */
function getMilk(money) {
  var numberOfBottles = Math.floor(money / 1.5);
  console.log("you bought " + numberOfBottles + " bottle of milk");
  return money % 1.5;
}

var change = getMilk(2);
console.log("your change is " + change);

/* Another example. */
function printDogAgeInHumanYears() {
    console.log("Human age of the dog is: " + humanAge);
}
var dogAge = prompt("Dog age is?");
humanAge = ((dogAge -2) * 4) + 21;
printDogAgeInHumanYears();
