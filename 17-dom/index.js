const text = window.document.querySelector('.text');
const plusBtn = document.querySelector('.plusBtn');
const minusBtn = document.querySelector('.minusBtn');

let fontSize = 16
plusBtn.addEventListener('click', ()=> {
    if (fontSize <= 104) {
        fontSize += 4
        text.style.fontSize = fontSize + 'px'
    }
});


minusBtn.addEventListener('click', ()=> {
    if (fontSize >= 10) {
        fontSize -= 4
        text.style.fontSize = fontSize + 'px'
    }
});


const textarea = document.querySelector('#textarea');
const submitBtn = document.querySelector('.submitBtn');
const error = document.querySelector('.error')


submitBtn.addEventListener('click', () => {
    let text = textarea.value;
    if (text.length < 100) {
        error.style.visibility = 'visible';
    } else {
        error.style.visibility = 'hidden';
    }
}) 

// textarea.style.backgroundColor = 'blue'
//submitBtn.style.backgroundColor = 'blue'




const myFirstDiv = document.querySelector("#myFirstDiv");
const mySecondDiv = document.querySelector("#mySecondDiv");
const myThirdDiv = document.querySelector("#myThirdDiv");
const myFourthDiv = document.querySelector("#myFourthDiv");


myFirstDiv.style.color = 'red'

const firstDiv = document.querySelector('.div1');
firstDiv.style.color = 'blue'

const allDivs = document.querySelectorAll('div');

allDivs.forEach(element => {
    element.style.color = 'green';
});