'use strict';

console.log('Hello world!');

let x = 10;
console.log(x);

let usersName = prompt('What is your favorite car brand?');
let message;

if (usersName == 'Porsche'){
    message = 'There is no substitute :-)'
} else if (usersName =='porsche'){
    message = 'There is no substitute :-)'
} else if (usersName =='Mercedes'){
    message = 'Right city, wrong choice'
} 

else {
    message = 'Good choice, but Porsche is my favorite';
}
document.write(message);





const divEl = document.getElementById('bottom');

let degrees = 0;

function onChange(event) {
    const percentX = event.offsetX / 396;
    const percentY = event.offsetY / 396;

    degrees += event.movementY;
    divEl.style.transform = `translateX(-50%) rotate(${degrees}deg)`;
      }

      function reset() {
        divEl.style.transform = `translateX(-50%)`;
        degrees = 0;
      }

    divEl.addEventListener('mousemove', onChange);