'use strict';

console.log('Hello world!');

let x = 10;
console.log(x);

let usersName = prompt('What is your name?');
let message;

if (usersName == 'Kassie'){
    message = 'Hiya Teach!'
} else if (usersName =='Ben'){
    message = 'Hi Ben!'
} 

else {
    message = 'Welcome to my site!';
}
document.write(message);
