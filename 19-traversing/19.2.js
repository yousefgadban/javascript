const error = document.querySelector('.error')


const input1 = document.querySelector('.input1')
const input2 = document.querySelector('.input2')
const input3 = document.querySelector('.input3')
const input4 = document.querySelector('.input4')
const input5 = document.querySelector('.input5')
const input6 = document.querySelector('.input6')

const allInputs = document.querySelectorAll('.input')

const verifyBtn = document.querySelector('.verifyBtn');

let enteredCode = ['', '', '', '', '', '']
let pastedText = ''

//startVerfication(enteredCode)

let allInputsArray = Array.from(allInputs)
for (let i = 0 ; i < allInputsArray.length; i++) {


    allInputsArray[i].addEventListener('keyup', () => {
        let value = allInputsArray[i].value;
    
        if (value.length == 1 && i != 5) {
            enteredCode[i] = ''+value;
            allInputsArray[i+1].focus();
        }
    })


    allInputsArray[i].addEventListener('paste', (e) => {
        e.preventDefault();
        const text = (e.originalEvent || e).clipboardData.getData('text/plain');
        pastedText = text;
        //window.document.execCommand('insertText', false, text);
    });

    allInputsArray[i].onpaste = function() {paste(i)};
}

input6.addEventListener('keyup', () => {
    let value = input6.value;

    if (value.length == 1) {
        enteredCode[5] = ''+value;
        startVerfication(enteredCode)
    }
}) 


verifyBtn.addEventListener('click', () => {
    startVerfication()
})

function startVerfication() {
    let code = enteredCode.join('');
    console.log('enteredCode ' + code);

    if (code.length < 6) {
        error.style.visibility = 'visible';
        error.innerHTML = 'ERROR'
        error.style.backgroundColor = 'red'
    } else {
        error.style.visibility = 'hidden';
        error.innerHTML = 'ERROR'
        error.style.backgroundColor = 'red'
    }

    console.log('ind ' + enteredCode.indexOf('') + '  ' + enteredCode);

    if (enteredCode.indexOf('') == -1) {
        error.innerHTML = 'SUCCESS'
        error.style.backgroundColor = 'green'
        error.style.visibility = 'visible';
        
    } else {
        error.style.visibility = 'visible';
        error.innerHTML = 'ERROR'
        error.style.backgroundColor = 'red'
    }
}

function paste(i) {

    let pasted = allInputsArray[2].value;

    let k = 0;
    let m = pastedText.length + i <= 6 ? pastedText.length + i : pastedText.length

    console.log('pasted: ' + i + ' ' + m + ' -> ' +  pastedText);

    if (m < 6) {
        allInputsArray[5].focus()
    }

    for (let j = i ; j < m ; j++) {
        allInputsArray[j].value = pastedText[k]
        enteredCode[j] = pastedText[k]
        k++;
        if (allInputsArray[5].value != '') {
            console.log('past entered code: ' + enteredCode.join(''));

            if (enteredCode.indexOf('') == -1) {
                console.log('success');
                error.innerHTML = 'SUCCESS'
                error.style.backgroundColor = 'green'
                error.style.visibility = 'visible';
            }
        }
    }
}

//   123456