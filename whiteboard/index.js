import { User } from './user.js';
import { prompt, cleanUp } from './input.js';
import { writeData, readData } from './db.js';
import { playMultipleGames, singlePlayerGame } from './game.js';
import { sandbox} from './sandbox.js'

import terminalImage from 'terminal-image';

const demo_play_10_games = () => {
    // Make a couple users
    const p1_moves = ["r", "p", "s", "r", "p", "s", "r", "p", "s", "r"];
    const p2_moves = ["r", "r", "r", "r", "r", "r", "r", "r", "r", "r"];
    
    const p1 = new User("Alice", p1_moves);
    const p2 = new User("Bill", p2_moves);
    
    // Play multiple games and collect some stats
    const stats = playMultipleGames(p1, p2);
    
    // Display our collected stats
    console.log("Final Statistics:");
    console.log(`   ${p1.name} Wins: ${stats.p1_wins}`);
    console.log(`   ${p2.name} Wins: ${stats.p2_wins}`);
    console.log(`   Ties: ${stats.ties}`);

    writeData("gameStats.json", stats);
}

async function main() {
    // Startup logic, welcome, splash screen
    console.log("Welcome to Rock, Paper, Scissors!");

    // Main Event Loop / Logic
    // What are the main things our app does?
    console.log("Type 'h' for help. 'q' to quit.");

    // Start running our application
    let running = true;
    while (running) {
        // Ask the user what they want to do
        const userInput = await prompt("[Whiteboard] > ");

        switch (userInput){
            case 'h':
            case 'help':
            case "?":
                console.log("Help Menu:");
                console.log("   h / help - Display this help menu");
                console.log("   g / game - play a game of rock paper scissors");
                console.log("   d / demo - run of preset of demo of 10 games");
                console.log("   oiia - Little fun surprise");
                console.log("   s / sandbox - Sandbox test code");
                console.log("   q / exit - Quit the application");
                break;
            case "q":
            case 'quit':
            case 'exit':
                // Stop running
                running = false;
                break;
            case 'game':
            case 'g':
                await singlePlayerGame();
                break;
                
            case 'demo':
            case 'd':
                demo_play_10_games();
                break;
            case 'oiia':
                console.log("Welcome to the secret oiia mode!");  
                console.log(await terminalImage.file('./data/oiia.jpeg'));
                break;
            case 's':
            case 'sandbox':
                console.log("Starting sandbox Code...");
                await sandbox();
                break;
            default:
                console.log("What are you even trying to do? Type 'h' for help.");
                break;
        };
    };

    // Cleanup logic / shutdown
    console.log("Thanks for playing! Goodbye!");
    cleanUp();
}

// Start our application
main();
