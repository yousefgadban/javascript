const rockBtn = document.querySelector('.rockBtn');
const paperBtn = document.querySelector('.paperBtn');
const scissorsBtn = document.querySelector('.scissorsBtn');
const playerImg = document.querySelector('.playerImg');
const pcImg = document.querySelector('.pcImg');

const title = document.querySelector('.title');
const playerScore = document.querySelector('.playerScore');
const drawScore = document.querySelector('.drawScore');
const pcScore = document.querySelector('.pcScore');


let roundsCount = 0;
let playerScoreCount = 0;
let drawScoreCount = 0;
let pcScoreCount = 0;

let myChoiceNum = 0;
let pcChoiceNum = 0;

let rockURL = 'https://www.afiniti.com/static/media/none.7969bf7a.png';
let paperURL = 'https://www.afiniti.com/static/media/paper.24d69089.png';
let scissorsURL = 'https://www.afiniti.com/static/media/scissors.0dc12241.png';


playerImg.style.background = `url(${rockURL}) center center/contain no-repeat`
pcImg.style.background = `url(${rockURL}) center center/contain no-repeat`




addClickEvents()

function addClickEvents() {
    let choiceBtns = document.querySelectorAll('.choiceBtn');
    for (choiceBtn of choiceBtns) {
        choiceBtn.addEventListener('click', startGame);
    }
}

// rockBtn.addEventListener('click', () => {
//     console.log('rockBtn clicked');
//     myChoiceNum = 0;

// });

// paperBtn.addEventListener('click', () => {
//     console.log('paperBtn clicked');
//     myChoiceNum = 1;
// });

// scissorsBtn.addEventListener('click', () => {
//     console.log('scissorsBtn clicked');
//     myChoiceNum = 2;
// });

function startGame() {
    let rndInt = Math.floor(Math.random() * 3)
    console.log('startGame ' + this.id + ' ' +  rndInt);

    if (this.id == 'rockBtnId') {

        playerImg.style.background = `url(${rockURL}) center center/contain no-repeat`

        if (rndInt == 0) {
            pcImg.style.background = `url(${rockURL}) center center/contain no-repeat`
            drawScore.innerHTML = ++drawScoreCount;
        } else if (rndInt == 1) {
            pcImg.style.background = `url(${paperURL}) center center/contain no-repeat`
            pcScore.innerHTML = ++pcScoreCount;
        } else {
            pcImg.style.background = `url(${scissorsURL}) center center/contain no-repeat`
            playerScore.innerHTML = ++playerScoreCount;
        }

        
    } else if (this.id == 'paperBtnId') {

        playerImg.style.background = `url(${paperURL}) center center/contain no-repeat`

        if (rndInt == 0) {
            pcImg.style.background = `url(${rockURL}) center center/contain no-repeat`
            playerScore.innerHTML = ++playerScoreCount;
        } else if (rndInt == 1) {
            pcImg.style.background = `url(${paperURL}) center center/contain no-repeat`
            drawScore.innerHTML = ++drawScoreCount;
        } else {
            pcImg.style.background = `url(${scissorsURL}) center center/contain no-repeat`
            pcScore.innerHTML = ++pcScoreCount;
        }

    } else {
        
        playerImg.style.background = `url(${scissorsURL}) center center/contain no-repeat`

        if (rndInt == 0) {
            pcImg.style.background = `url(${rockURL}) center center/contain no-repeat`
            pcScore.innerHTML = ++pcScoreCount;
        } else if (rndInt == 1) {
            pcImg.style.background = `url(${paperURL}) center center/contain no-repeat`
            playerScore.innerHTML = ++playerScoreCount;
        } else {
            pcImg.style.background = `url(${scissorsURL}) center center/contain no-repeat`
            drawScore.innerHTML = ++drawScoreCount;
        }

    }

    title.innerHTML = 'Round ' + ++roundsCount;
}

function updateScores() {

}

