//Buttons
const startBtn = document.querySelector('#start');
const resetBtn = document.querySelector('#reset');

startBtn.addEventListener('click', () => toggle());
resetBtn.addEventListener('click', () => resetTimer());

//Digit Elements
const secondTens = document.querySelector('#secondTens');
const secondOnes = document.querySelector('#secondOnes');
const msHundreds = document.querySelector('#msHundreds');
const msTens = document.querySelector('#msTens');
const digits = document.querySelectorAll('.digits .digit');

let count = 0;
let timer;

const increment = () => {
    count++;
    msTens.textContent = count % 10;
    msHundreds.textContent = Math.floor(count / 10) % 10;
    secondOnes.textContent = Math.floor(count / 100) % 10;
    secondTens.textContent = Math.floor(count / 1000) % 10;
    if (count === 1000) {
        clearInterval(timer);
        digits.forEach(item => item.classList.toggle('redDigit'))
    }
}

const toggle = () => {
    if (startBtn.textContent === 'Start') {
        startBtn.textContent = 'Stop';
        startBtn.classList.toggle('stop');
        timer = setInterval(increment, 10);
    } else if (startBtn.textContent === 'Stop') {
        startBtn.textContent = 'Start';
        startBtn.classList.toggle('stop');
        clearInterval(timer);
    }    
}

const resetTimer = () => {
    if (count === 1000) {
        digits.forEach(item => item.classList.toggle('redDigit'));
    }

    count = 0;
    msTens.textContent = 0
    msHundreds.textContent = 0;
    secondOnes.textContent = 0;
    secondTens.textContent = 0;
}