// example object

var houseKeeper1 = {
  yearsOfExperience: 12,
  name: "Jane",
  cleaningRepertoire: ["bathroom", "lobby"]
}

// example object constructor
function HouseKeeper(yearsOfExperience, name, cleaningRepertoire) {
  this.yearsOfExperience = yearsOfExperience;
  this.name = name;
  this.cleaningRepertoire = cleaningRepertoire;
  this.tellName = function () {
    console.log(this.name);
  }
}

var HouseKeeper2 = new HouseKeeper(10, "Dagmara", ["any", "balcony"]);
HouseKeeper2.tellName();
