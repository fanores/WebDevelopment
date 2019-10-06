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
