const hoursElement = document.querySelector('.hours')
const minutesElement = document.querySelector('.minutes')
const secondsElement = document.querySelector('.seconds')


getCurrentTime()

function getCurrentTime() {
    var date = new Date;

    let seconds = +date.getSeconds();
    let minutes = +date.getMinutes();
    let hours = +date.getHours();

    console.log(hours + ':' + minutes + ':' + seconds);

    hoursElement.innerHTML = hours
    minutesElement.innerHTML = minutes
    secondsElement.innerHTML = seconds

    var intervalId = window.setInterval(function(){
            run() 
    }, 1000);
    
    function run() {
        seconds++

        if (seconds == 60) {
            seconds = 0;
            minutes++
            if (minutes == 60) {
                minutes = 0
                hours++
                if (hours == 24) {
                    hours = 0
                }
            }
        }

        secondsElement.innerHTML = seconds
        minutesElement.innerHTML = minutes
        hoursElement.innerHTML = hours

    }
}