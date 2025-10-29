let nethackStart = require("@neth4ck/neth4ck");

nethackStart(doGraphics);

let winCount = 0;
async function doGraphics(name, ... args) {
    console.log(`shim graphics: ${name} [${args}]`);

    switch(name) {
    case "shim_create_nhwindow":
        winCount++;
        console.log("creating window", args, "returning", winCount);
        return winCount;
    case "shim_yn_function":
    case "shim_message_menu":
        return 121; // return 'y' to all questions
    case "shim_nhgetch":
    case "shim_nh_poskey":
        return 0; // simulates a mouse click on "exit up the stairs"
    default:
        return 0;
    }
}