import { playGame } from './game.js';
import { User, greetUser } from './user.js';

// Make a user
const p1 = new User("Alice", "P");

const p1moves = {}

// Make another user
const p2 = new User("Bill", "R");
const p2moves = {}

const stats = {
    p1wins: 0,
    p2wins: 0,
    ties: 0,
    rounds:0
}
// Play the game
let winner = playGame(p1.move, p2.move);

// Print out the result
if (winner === 0) {
    console.log("It's a tie!");
} else if (winner === 1) {
    console.log(p1.name + " won!");
} else if (winner === 2) {
    console.log(p2.name + " won!");
}

//play a few games
for (let i=0; i<p1.moves.length; i++){
    console.log(`Round #$(i+1)`);

    const roundWinner = playGame(p1moves[i], p2moves[i])

    if (roundWinner === 0){
        stats.ties++;

    } else if (roundWinner === 1){
        stats.p1wins++;
    } else if (roundWinner === 2){
        stats.p2wins++;
    }
    stats.rounds++
}
console.log(`--Game Stats--`);
console.log(`Games Played: ${stats.rounds}`);
console.log(`${p1.name} won: ${stats.p1wins} time(s)`);
console.log(`${p2.name} won: ${stats.p2wins} time(s)`);
console.log(`${p1.name} & ${p2.name} tied: ${stats.ties} time(s)`);
