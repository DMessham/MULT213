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
    const rounds = parseInt(await prompt('Hello ${playerName}! How many rounds should be played? '));

    //TODO: eventually add stats

    console.log('Playing ${rounds} round(s)');
    const validMoves = ['r', 'p', 's'];
    for (let i = 0; i < rounds; i++){
        let playerMove = '';
        while (true){
            playerMove = (await prompt("Enter move to play ([r]ock,[p]aper,[s]cissors): ")).toLowerCase();
            if (validMoves.includes(playerMove)) {
                break;
            } else {
                console.log("Invalid Move! Valid Moves are 'r' for Rock, 'p' for Paper, 's' for scissors.")
            }
        }

        //computers move (always rock rightnow)
        const computerMove = "r";
        // todo: make the computer better, but not too good, random isnt too fun rn
        //const randomMove = Math.floor(math.random() * validMoves.length)
        //const computerMove = validMoves[randomMove]
        console.log(`   The Computer plays: ${computerMove}`);

        //actually play game
        const roundWinner = playGame(playerMove, computerMove);
        if (roundWinner === 0) {
            stats.ties += 1;
            console.log("   It's a tie!");
        } else if (roundWinner === 1) {
            stats.p1_wins += 1;
            console.log(`   ${playerName} won!`);
        } else if (roundWinner === 2) {
            stats.p2_wins += 1;
            console.log(`   The Computer won!`);
        }

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
function whoWon(roundWinner, p1name, p2name){
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
export { playGame, playMultipleGames, singlePlayerGame };