
const title = document.createElement('h3')
title.innerHTML = 'Stop Watch JS'
title.style.color = '#2196f3'
document.body.append(title)


const watchDiv = document.createElement('div')
watchDiv.style.display = 'flex'
document.body.append(watchDiv)

const minutesElement = document.createElement('p')
minutesElement.innerHTML = '00'
const secondsElement = document.createElement('p')
secondsElement.innerHTML = '00'
const millisElement = document.createElement('p')
millisElement.innerHTML = '00'

const seperateElement = document.createElement('p')
seperateElement.innerHTML = ':'

const seperateElement1 = document.createElement('p')
seperateElement1.innerHTML = ':'

watchDiv.append(minutesElement)
watchDiv.append(seperateElement)
watchDiv.append(secondsElement)
watchDiv.append(seperateElement1)
watchDiv.append(millisElement)

let ps = document.querySelectorAll('p')

ps.forEach(element => {
    element.style.margin = '15px'
});

const startBtn = document.createElement("input");
startBtn.type = "text";
startBtn.className = "start";
startBtn.value = "START"
startBtn.style.width = '100px'
startBtn.style.margin = '5px'
document.body.appendChild(startBtn);

const stopBtn = document.createElement("input");
stopBtn.type = "text";
stopBtn.className = "stop";
stopBtn.value = "STOP"
stopBtn.style.width = '100px'
stopBtn.style.margin = '5px'
document.body.appendChild(stopBtn);

const resetBtn = document.createElement("input");
resetBtn.type = "text";
resetBtn.className = "reset";
resetBtn.value = "RESET"
resetBtn.style.width = '100px'
resetBtn.style.margin = '5px'
document.body.appendChild(resetBtn);






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


