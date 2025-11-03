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
export { playGame };