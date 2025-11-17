// Game Logic

// Rock, Paper, Scissors

// Rock ("R" "Rock" "ROCK") beats Scissors
// Scissors ("S" "SCISSORS") beats Paper
// Paper ("P" "PAPER") beats Rock

/*
playGame - Takes in two player choices and determines the winner

Returns 0 for tie
Returns 1 if player 1 win
Returns 2 if player 2 win
*/

import { prompt} from './input.js';

const validMoves = ['r', 'p', 's'];

const moveNames = ['Rock', 'Paper', 'Scissors'];

function isValidMove(move){
    return validMoves.includes(move);
};

// auto gen a list of moves to show to the user
// let moveNameList = '';

// for (let i = 0; i < validMoves.length; i++){
    // moveNameList += `'${validMoves[i]}' for ${moveNames[i]}, `
// };
// console.log('valid move list: ' + moveNameList);

const moveInput = async (prompt) => {
    let move = '';
        while (true){
            move = (await prompt(`${prompt}Enter move to play ([r]ock,[p]aper,[s]cissors): `)).toLowerCase();
            if (isValidMove(move)) {
                return(move);
            } else {
                console.log(`${prompt}Invalid Move! Valid Moves are 'r' for Rock, 'p' for Paper, 's' for scissors.`)
            }
        }
}


const playGame = (player1Choice, player2Choice) => {
    if (player1Choice === player2Choice) {
        return 0; // Tie
    }

    if (
        (player1Choice === "r" && player2Choice === "s") ||
        (player1Choice === "s" && player2Choice === "p") ||
        (player1Choice === "p" && player2Choice === "r")
    ) {
        return 1; // Player 1 wins
    } else {
        return 2; // Player 2 wins
    }
}

const singlePlayerGame = async () => {
    const playerName = await prompt("Enter your name: ");
    const rounds = parseInt(await prompt(`Hello ${playerName}! How many rounds should be played? `));

    //TODO: eventually add stats

    console.log(`Playing ${rounds} round(s)`);
    
    for (let i = 0; i < rounds; i++){
        let playerMove = moveInput(`${playerName}'s Turn: `);

        //computers move (always rock rightnow)
        const computerMove = 0;
        // todo: make the computer better, but not too good, random isnt too fun rn
        //const computerMove = Math.floor(math.random() * validMoves.length)
        console.log(`   The Computer plays: ${moveNames[computerMove]}`);

        //actually play game
        const roundWinner = playGame(playerMove, validMoves[computerMove]);
        let garb= 0; //dont log stats 
        whoWon(roundWinner, playerName, 'The Computer', garb, garb, garb);

    }   
}

const playMultipleGames = (p1, p2) => {
    const stats = {
        p1_wins: 0,
        p2_wins: 0,
        ties: 0
    }

    // Play 10 rounds
    for (let i = 0; i < p1.moves.length; i++) {
        console.log(`Round ${i + 1}`);

        // Figure out each person's moves for the round
        // Compare the moves against each other, get a result
        const p1Move = p1.moves[i];
        console.log(`   ${p1.name} plays ${p1Move}`);

        const p2Move = p2.moves[i];
        console.log(`   ${p2.name} plays ${p2Move}`);

        const roundWinner = playGame(p1Move, p2Move);
        // Update stats based on result

        whoWon(roundWinner, p1.name, p2.name, stats.p1_wins, stats.p2_wins, stats.ties);
    }

    return stats;
}
function whoWon(roundWinner, p1name, p2name, p1wins, p2wins, tieStat){
    if (roundWinner === 0) {
        tieStat += 1;
        console.log("   It's a tie!");
    } else if (roundWinner === 1) {
        p1wins += 1;
        console.log(`   ${p1name} won!`);
    } else if (roundWinner === 2) {
        p2wins += 1;
        console.log(`   ${p2name} won!`);
    }
}
export { playGame, playMultipleGames, singlePlayerGame };