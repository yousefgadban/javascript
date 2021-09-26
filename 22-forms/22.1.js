const userName = document.querySelector('#name')
const age = document.querySelector('#age')
const email = document.querySelector('#email')
const error = document.querySelector('.error')
const submitBtn = document.querySelector('#submitBtn')
const popup = document.querySelector('.popup')
const container = document.querySelector('.container')
const popupWindow = document.querySelector('.popup-window')

const confirmBtn = document.querySelector('#confirm')
const changeBtn = document.querySelector('#change')



// userName.value = 'yousef'
// age.value = '21'
// email.value = 'test@test.com'




submitBtn.addEventListener('click', ()=> {
    //console.log('Submit clicked');
    console.log('Submit ' + userName.value + ' ' + age.value + ' ' + email.value);

    if (userName.value == '' || age.value == '' || email.value == '')  {
        error.style.visibility = 'visible';
    } else {
        error.style.visibility = 'hidden';

        if (validateEmail(email.value)) {
            console.log('valid');
            popup.style.visibility = 'visible';
            popupWindow.style.visibility = 'visible';
        } else {
            error.style.visibility = 'visible';
        }

    }

})

confirmBtn.addEventListener('click', ()=> {
    popup.style.visibility = 'hidden';
    popupWindow.style.visibility = 'hidden';
    error.style.visibility = 'visible';
    error.style.backgroundColor = 'green'
    error.innerHTML = 'Success'
})

changeBtn.addEventListener('click', ()=> {
    popup.style.visibility = 'hidden';
    popupWindow.style.visibility = 'hidden';
})

popup.addEventListener('click', () => {
    console.log('popup clicked');
    popup.style.visibility = 'hidden';
    popupWindow.style.visibility = 'hidden';
})


function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}



///////////////////////////////////////// checkbox /////////



const checkbox = document.querySelector('#checkbox')
const showImage = document.querySelector('.show-image')
const smiley = document.querySelector('.smiley')

checkbox.addEventListener('click', () => {
    chagneCheckBox()
})

function chagneCheckBox() {
    if (checkbox.checked == true) {
        smiley.style.visibility = "visible"; 
        showImage.innerHTML = 'Hide image'
      } else {
        smiley.style.visibility = "hidden";
        showImage.innerHTML = 'Show image'
    }
}