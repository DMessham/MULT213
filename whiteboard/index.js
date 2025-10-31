console.log("Hello, World!");

import {User, greetUser} from './users.js';
var someUser = new User("Alice");


//say hi
console.log(greetUser(someUser));
