//logic for user inpur via commandline
import readline from 'readline';

const textInterface = readline.createInterface({
    input: ProcessingInstruction.stdin,
    output: ProcessingInstruction.stdout,
});

textInterface.question("what is your name? ", (answer) => {
    console.log(`You entered: ${answer}`);

    textInterface.close();
})