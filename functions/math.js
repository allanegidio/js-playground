var firstDie = 5;
var secondDie = 3;

//Generate a random number between 0 to 5
var value = 6 * Math.random();

//Rounds up to the next nearest integer.
var ceil1 = Math.ceil(.95) // Prints 1
var ceil2 = Math.ceil(7.004) // Prints 8
var ceil3 = Math.ceil(5.9); // Prints 6

// Rounds up to the closest integer. (up or down)
var round1 = Math.round(5.9); // Prints 6
var round2 = Math.round(5.009); // Prints 5
var round3 = Math.round(1.6); //Prints 2

// Floor always rounds down
var floor1 = Math.floor(1.6); //Prints 1
var floor2 = Math.floor(5.123123213123123); // Prints 5