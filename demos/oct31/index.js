console.log("Hello, World!");

import {User, greetUser} from './users.js';
import {playGame} from './game.js';
var p1 = new User("Alice", "r");
var p2 = new User("Bob", "p");

//say hi
console.log(greetUser(p1));

var winner = playGame(p1.move, p2.move);

if (winner === 0){
    console.log("It's a Tie!");
} else if (winner === 1){
    console.log(p1.name + " Won!");
}else if (winner ===2){
    console.log(p2.name + " Won!");
};