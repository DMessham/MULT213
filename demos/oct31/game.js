// game logic

// rock paper scissors

//rock (r) beats paper
//scissors (s) beats paper
// paper(p) beats rock

//return vals: 0 means tie, 1 means p1 wins, 2 means p2 wins, -1 means error
function playGame(p1choice, p2choice){
    if (p1choice == p2choice){
        return 0; //tie
    }
    if (p1choice = "r"){
        //p1 chose rock
        if (p2choice = "s"){
            return 1; //p1 wins
        } else if (p2choice = "p"){
            return 2; //p2 wins
        }else {
            return -1;//error
        }
    } else if (p1choice = "p") {
        if (p2choice = "s"){
            return 1; //p1 wins
        } else if (p2choice = "r"){
            return 2; //p2 wins
        } else {
            return -1;//error
        }
    } else if (p1choice = "s") {
        if (p2choice = "p"){
            return 1; //p1 wins
        } else if (p2choice = "r"){
            return 2; //p2 wins
        } else {
            return -1;//error
        }
    } else {
        //error
        return -1;
    }
}

// console.log(playGame('p', 's'));

export {playGame}