const inputField = document.querySelector('.inputField');
const submitBtn = document.querySelector('.submitBtn');
const error = document.querySelector('.error')
const message = document.querySelector('.message')



submitBtn.addEventListener('click', () => {
    let text = inputField.value;
    if (isNaN(text)) {
        error.style.visibility = 'visible';
        error.innerHTML = 'Invalid input'
    } else {
        error.style.visibility = 'hidden';

        let age = +text;
        if (age < 0) {
            error.style.visibility = 'visible';
            error.innerHTML = 'Invalid input'
        } else if (age < 18) {
            message.innerHTML = 'You are too young!'
        } else {
            message.innerHTML = 'You can drink a beer'
        }

        
    }
}) 