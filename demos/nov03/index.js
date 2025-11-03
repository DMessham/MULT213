import { playGame, playMultiple } from './game.js';
import { User, greetUser } from './user.js';

// Make a user
const p1moves = ["R", "P", "S", "R", "P", "S", "R", "P", "S", "R"];
const p1 = new User("Alice", p1moves);

// Make another user
const p2moves = ["R", "R", "R", "R", "R", "R", "R", "R", "R", "R"];
const p2 = new User("Bill", p2moves);


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
// for (let i=0; i<p1.moves.length; i++){
//     console.log(`Round # ${i+1}`);
    
//     console.log(`   ${p1.name} [P1] plays ${p1.moves[i]}`);
//     console.log(`   ${p2.name} [P2] plays ${p2.moves[i]}`);
//     const roundWinner = playGame(p1moves[i], p2moves[i])

//     if (roundWinner === 0){
//         stats.ties++;
//         console.log(`   ${p1.name} [P1] & ${p2.name} [P2] Tied!`);

//     } else if (roundWinner === 1){
//         stats.p1wins++;
//         console.log(`   ${p1.name} [P1] won`);
//     } else if (roundWinner === 2){
//         stats.p2wins++;
//         console.log(`   ${p2.name} [P2] won`);
//     }
//     stats.rounds++
// }


let stats = playMultiple(p1,p2);

console.log(`--Game Stats--`);
console.log(`Games Played: ${stats.rounds}`);
console.log(`${p1.name} won ${stats.p1wins} time(s)`);
console.log(`${p2.name} won ${stats.p2wins} time(s)`);
console.log(`${p1.name} & ${p2.name} tied ${stats.ties} time(s)`)