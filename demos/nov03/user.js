// Define a User object
export class User {
    constructor(name, moves) {
        this.name = name;
        this.moves = moves;
    }
}

// A greeter function
export function greetUser(user) {
    return "Welcome, " + user.name + "!";
}