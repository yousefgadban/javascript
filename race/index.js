const startBtn = document.querySelector('#startBtn')
const restartBtn = document.querySelector('#restartBtn')
const playerRace1 = document.querySelector('#player1-race')
const playerRace2 = document.querySelector('#player2-race')
const status = document.querySelector('.status')

let minSpeed = 3
let maxSpeed = 5

let speed1 = 1;
let speed2 = 1;

console.log('speed ' + speed1 + ' ' + speed2);

let raceOver = true;

restartBtn.style.display = 'none'
status.innerHTML = ''

startBtn.addEventListener('click', () => {
    console.log('startBtn');
    startRace()
})

restartBtn.addEventListener('click', () => {
    console.log('restartBtn');
    restartBtn.style.display = 'none'
    status.innerHTML = ''
    startBtn.style.display = 'block'

    let playerChildren1 = playerRace1.children
    for (let i = 0 ; i < playerChildren1.length ; i++) {
        playerChildren1[i].classList.remove('active');
    }
    playerChildren1[0].classList.add('active');

    let playerChildren2 = playerRace2.children
    for (let i = 0 ; i < playerChildren2.length ; i++) {
        playerChildren2[i].classList.remove('active');
    }
    playerChildren2[0].classList.add('active');

    //startRace()

})


function startRace() {

    startBtn.style.display = 'none'
    restartBtn.style.display = 'none'

    speed1 = randomIntFromInterval(minSpeed, maxSpeed);
    speed2 = randomIntFromInterval(minSpeed, maxSpeed);

    raceOver = false;
    status.innerHTML = 'Racing...'
    startBtn.style.display = 'none'

    let playerChildren1 = playerRace1.children

    let i1 = 0;
    let i2 = 0;

    while (i1 < playerChildren1.length -1) {
        await = forward1(i1++)
    }

    while (i2 < playerChildren1.length -1) {
        await = forward2(i2++)
    }


}


async function forward1(i) {
    let playerChildren1 = playerRace1.children
    setTimeout(()=> {
        // console.log('i ' + i);
        playerChildren1[i].classList.remove('active');
        playerChildren1[i+1].classList.add('active');

        if (i == 10) {
            console.log('race over1');
            raceOverFun(1)
        }

        
        return i;
    }, 1000*i/speed1)
}

async function forward2(i) {
    let playerChildren2 = playerRace2.children
    setTimeout(()=> {
        playerChildren2[i].classList.remove('active');
        playerChildren2[i+1].classList.add('active');

        if (i == 10) {
            console.log('race over2');
            raceOverFun(2)
        }

        
        return i;
    }, 1000*i/speed2)
}

function raceOverFun(car) {
    if (!raceOver) {

        if (speed1 == speed2) {
            status.innerHTML = 'DRAW!';
        } else {
            status.innerHTML = 'We have a WINNER... player ' + car;
        }
        
        
        raceOver = !raceOver;
    } else {
        restartBtn.style.display = 'block'
    }
}


function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}