const trueGuess = document.querySelector('.trueGuess')
const message = document.querySelector('.message')
const gussedKeys = document.querySelector('.gussedKeys')
const input = document.querySelector('#input')
const playAgainBtn = document.querySelector('#playAgainBtn')


let letter = 'y'
let alreadyGuessed = ''
let gameOver = false;

input.focus();
//input.style.visibility = 'hidden'
input.style.height = 0
input.style.width = 0
input.style.border = '0px'

input.addEventListener('keyup', () => {
    console.log('keyup ' + input.value);
    checkLetter(input.value)
});

playAgainBtn.addEventListener('click', () => {
    console.log('play again');
    gameOver = false

    message.innerHTML = 'Guess a letter'
    message.style.color = 'black'
    trueGuess.innerHTML = '?'

    alreadyGuessed = ''
    gussedKeys.innerHTML = alreadyGuessed

    playAgainBtn.style.display = 'none'

    input.focus();
}) 

function checkLetter(ltr) {

    if (!gameOver) {

        if (letter == ltr) {
            gameOver = true

            message.innerHTML = 'true guess'
            message.style.color = 'green'
            
            trueGuess.innerHTML = ''+ltr

            playAgainBtn.style.display = 'block'

        } else {

            if (checkIfLetter(ltr)) {

                if (alreadyGuessed.indexOf(ltr) == -1) {
                    alreadyGuessed += ltr
                    message.innerHTML = 'wrong guess' 
                    message.style.color = 'red'
                    gussedKeys.innerHTML = alreadyGuessed.split('').join(',')
                } else {
                    message.innerHTML = ltr + ' has already been guessed' 
                    message.style.color = 'red'
                }

            } else {

                message.innerHTML = 'Invalid input' 
                message.style.color = 'red'

            }

            


        }
    }

    input.value = ""
    
}

function checkIfLetter(s) {
    if ('abcdefghijklmnopqrstuvwxyz'.indexOf(s.toLowerCase()) != -1) {
        return true
    } else {
        return false
    }
}

