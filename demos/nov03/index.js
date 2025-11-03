import { playGame } from './game.js';
import { User, greetUser } from './user.js';

// Make a user
var p1 = new User("Alice", "P");

// Make another user
var p2 = new User("Bill", "R");

// Play the game
var winner = playGame(p1.move, p2.move);

// Print out the result
if (winner === 0) {
    console.log("It's a tie!");
} else if (winner === 1) {
    console.log(p1.name + " won!");
} else if (winner === 2) {
    console.log(p2.name + " won!");
}

