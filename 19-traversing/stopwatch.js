const minutesElement = document.querySelector('.minutes')
const secondsElement = document.querySelector('.seconds')
const millisElement = document.querySelector('.millis')

const startBtn = document.querySelector('.start')
const stopBtn = document.querySelector('.stop')
const resetBtn = document.querySelector('.reset')

let intervalId

let startClicked = false;

startBtn.addEventListener('click', () => {
    if (!startClicked) {
        startClicked = true
        intervalId = window.setInterval(function(){
            run() 
        }, 1);
    }

})

stopBtn.addEventListener('click', () => {
    startClicked = false
    clearInterval(intervalId) 
})

resetBtn.addEventListener('click', () => {
    startClicked = false
    clearInterval(intervalId)

    seconds = 0;
    minutes = 0;
    millis = 0;

    secondsElement.innerHTML = seconds
    minutesElement.innerHTML = minutes
    millisElement.innerHTML = millis

})

let seconds = 0;
let minutes = 0;
let millis = 0


function run() {

    millis++
    if (millis == 100) {
        millis = 0
        seconds++
        if (seconds == 60) {
            seconds = 0;
            minutes++
            if (minutes == 60) {
                minutes = 0
                clearInterval(intervalId) 
            }
        }
    }



    secondsElement.innerHTML = seconds
    minutesElement.innerHTML = minutes
    millisElement.innerHTML = millis

}


