## Table of Contents

- [Link to Class 01 notes](read01.md)
- [Link to Class 02 notes](read02.md)
- [Link to Class 03 notes](read03.md)
- [Link to Class 04 notes](read04.md)
- [Link to Class 05 notes](read05.md)
- [Link to Class 06 notes](read06.md)
- [Link to Class 07 notes](read07.md)
- [Link to Class 08 notes](read08.md)

function greetuser(){
    let usersName = prompt('What is your name?');
    document.write('Hi ' + usersName)
;}

greetuser();

<div id="bottom"></div>

 <script>
        constant divEl = document.getElementById('bottom');
        let degrees = 0;
        function onChange(event) {
            const percentX = event.offsetX / 396;
            const percentY = event.offsetY / 396;
            degrees += event.movementY;
            divEl.style.transform = 'translateX(-50%) rotate(${degrees}deg)''
        }
        divEl.addEventListener('mousemove', onChange);
    </script>

function onChange(event) {
    const percentX = event.offsetX / 396;
    const percentY = event.offsetY / 396;
    degrees += event.movementY;
    divEl.style.transform = 'translateX(-50%) rotate(${degrees}deg)';
}


img id="hero" src="Cars/20200530_145227.jpg" width="400" alt="garage">

#bottom:hover{
    transform: rotateY(-15deg);
}