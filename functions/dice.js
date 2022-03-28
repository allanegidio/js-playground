// Creating function to reutilization.

var getDieRoll = function() {
	console.log("Rolling a die.");
	return Math.ceil(6 * Math.random());
};

//Refactor with function
var firstDie = getDieRoll();
var secondDie = getDieRoll();

console.log(firstDie);
console.log(secondDie);
console.log(firstDie + secondDie);