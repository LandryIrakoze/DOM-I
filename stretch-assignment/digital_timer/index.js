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
    if (count === 1000 || count > 1000) {
        digits.forEach(item => item.classList.toggle('redDigit'));
    }

    count = 0;
    msTens.textContent = 0
    msHundreds.textContent = 0;
    secondOnes.textContent = 0;
    secondTens.textContent = 0;
}

// class Timer {

//     timer;
//     count = 0;

//     constructor(timerElement) {
//         this.timerElement = timerElement;

//         this.secondTens = this.timerElement.querySelector('#secondTens');
//         this.secondOnes = this.timerElement.querySelector('#secondOnes');
//         this.msHundreds = this.timerElement.querySelector('#msHundreds');
//         this.msTens = this.timerElement.querySelector('#msTens');
//         this.digits = this.timerElement.querySelectorAll('.digits .digit');

//         this.startBtn = this.timerElement.querySelector('#start');
//         this.resetBtn = this.timerElement.querySelector('#reset');

//         this.startBtn.addEventListener('click', () => this.toggle());
//         this.resetBtn.addEventListener('click', () => this.resetTimer());

//     }

//     toggle() {
//         if (this.startBtn.textContent === 'Start') {
//             this.startBtn.textContent = 'Stop';
//             this.startBtn.classList.toggle('stop');
//             this.timer = setInterval(this.increment(), 10);
//         } else if (this.startBtn.textContent === 'Stop') {
//             this.startBtn.textContent = 'Start';
//             this.startBtn.classList.toggle('stop');
//             clearInterval(this.timer);
//         }
//     }

//     resetTimer() {
//         if (this.count === 1000) {
//             this.digits.forEach(item => item.classList.toggle('redDigit'));
//         }
    
//         this.count = 0;
//         msTens.textContent = 0
//         msHundreds.textContent = 0;
//         secondOnes.textContent = 0;
//         secondTens.textContent = 0;
//     }

//     increment() {
//         this.count++;
//         msTens.textContent = this.count % 10;
//         msHundreds.textContent = Math.floor(this.count / 10) % 10;
//         secondOnes.textContent = Math.floor(this.count / 100) % 10;
//         secondTens.textContent = Math.floor(this.count / 1000) % 10;
//         if (this.count === 1000) {
//             clearInterval(this.timer);
//             this.digits.forEach(item => item.classList.toggle('redDigit'))
//         }
//     }
// }

// const timerContainer = document.querySelector('.timer-container');

// let myTimer = new Timer(timerContainer);