// Define a User object
export class User {
    constructor(name, move) {
        this.name = name;
        this.move = move;
    }
}

// A greeter function
export function greetUser(user) {
    return "Welcome, " + user.name + "!";
}