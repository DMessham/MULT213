// Game Logic

// Rock, Paper, Scissors

// Rock ("R" "Rock" "ROCK") beats Scissors
// Scissors ("S" "SCISSORS") beats Paper
// Paper beats Rock

/*
Return 0 for tie
1 for player 1 win
2 for player 2 win
*/ 
function playGame(player1Choice, player2Choice) {
    if (player1Choice === player2Choice) {
        return 0; // Tie
    }

    if (
        (player1Choice === "R" && player2Choice === "S") ||
        (player1Choice === "S" && player2Choice === "P") ||
        (player1Choice === "P" && player2Choice === "R")
    ) {
        return 1; // Player 1 wins
        
    } else {
        return 2; // Player 2 wins
    }
}

// console.log(playGame("R", "S")); // Expected output: 1
// console.log(playGame("P", "R")); // Expected output: 1
// console.log(playGame("P", "S")); // Expected output: 2
// console.log(playGame("P", "P")); // Expected output: 0

function playMultiple(p1, p2){
    const stats = {
        p1wins: 0,
        p2wins: 0,
        ties: 0,
        rounds:0
    }

    //play as many rounds as there are moves listed for p1
    for (let i = 0; i < p1.moves.length; i++) {
        console.log(`Round ${i + 1}`);
        
        // Figure out each person's moves for the round
        // Compare the moves against each other, get a result
        const p1Move = p1.moves[i];

        const p2Move = p2.moves[i];

        
        console.log(`  MOVES: ${p1.name} - ${p1.moves[i]} \n         ${p2.name} - ${p2.moves[i]}`);

        const roundWinner = playGame(p1Move, p2Move);
        // Update stats based on result
        if (roundWinner === 0) {
            stats.ties += 1;
            console.log("  TIE! Nobody won :(");
        } else if (roundWinner === 1) {
            stats.p1wins += 1;
            console.log(`  ${p1.name} won!`);
        } else if (roundWinner === 2) {
            stats.p2wins += 1;
            console.log(`  ${p2.name} won!`);
        }
        stats.rounds++
    }

    return stats;
}
export { playGame, playMultiple };