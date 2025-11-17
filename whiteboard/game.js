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

const moveInput = async (text) => {
    while (true){
        const move = (await prompt(`${text}Enter move to play ([r]ock,[p]aper,[s]cissors): `)).toLowerCase();
        if (isValidMove(move)) {
            break;
        } else {
            console.log(`${text}Invalid Move! Valid Moves are 'r' for Rock, 'p' for Paper, 's' for scissors.`)
        }
    }
    return(move);
}


const playGame = (player1Choice, player2Choice) => {
    console.log("DEBUG: ENTERED FUNCTION playGame(player1Choice, player2Choice)");
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

const playMultipleGames = (p1, p2) => {
    console.log("DEBUG: ENTERED FUNCTION playMultipleGames(p1, p2)");
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

        if (roundWinner === 0) {
            stats.ties += 1;
            console.log("   It's a tie!");
        } else if (roundWinner === 1) {
            stats.p1_wins += 1;
            console.log(`   ${p1.name} won!`);
        } else if (roundWinner === 2) {
            stats.p2_wins += 1;
            console.log(`   ${p2.name} won!`);
        }
    }

    return stats;
}


const singlePlayerGame = async () => {
    console.log('Starting Singleplayer Game...')
    const playerName = await prompt("Welcome! Please enter your name: ");
    const rounds = parseInt(await prompt(`Hello, ${playerName}! How many rounds should be played? `));

    //TODO: eventually add stats

    console.log(`Playing ${rounds} round(s)`);
    
    for (let i = 0; i < rounds; i++){
        console.log(`ROUND ${i+1} of ${rounds}:`)
        
        let playerMove=''
        //get the players move and validate it
        // let playerMove = moveInput(`    ${playerName}'s Turn: `);
        while (true){
            playerMove = (await prompt(`   ${playerName}'s Turn: Enter move to play ([r]ock,[p]aper,[s]cissors): `)).toLowerCase();
            if (isValidMove(playerMove)) {
                break;
            } else {
                console.log(`    Invalid Move! Valid Moves are 'r' for Rock, 'p' for Paper, 's' for scissors.`)
            }
        }
        //computers move (always rock rightnow)
        console.log("   DEBUG: singlePlayerGame - Calculating Computers move");
        const computerMove = 0;
        // todo: make the computer better, but not too good, random isnt too fun rn
        //const computerMove = Math.floor(math.random() * validMoves.length)
        console.log(`   The Computer plays: ${moveNames[computerMove]}`);

        //actually play game
        // console.log("DEBUG: singlePlayerGame - Deciding who won");
        const roundWinner = playGame(playerMove, validMoves[computerMove]);
        if (roundWinner === 0) {
            console.log("    It's a tie!");
        } else if (roundWinner === 1) {
            console.log(`${playerName} won!`);
        } else if (roundWinner === 2) {
            console.log(`   The Computer won!`);
        }
        console.log(`   DEBUG: singlePlayerGame - End of main loop, i = ${i}`);
    }   
    console.log("DEBUG: singlePlayerGame - exited main loop");
}

export { playGame, playMultipleGames, singlePlayerGame };