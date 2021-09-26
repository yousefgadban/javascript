const inputField = document.querySelector('.inputField');
const submitBtn = document.querySelector('.submitBtn');
const error = document.querySelector('.error')
const smileyesDiv = document.querySelector('.smileyesDiv')


submitBtn.addEventListener('click', () => {
    let text = inputField.value;
    if (isNaN(text)) {
        error.style.visibility = 'visible';
        smileyesDiv.style.visibility = 'hidden';
    } else {
        error.style.visibility = 'hidden';
        smileyesDiv.style.visibility = 'visible';
        addSmileyes(+text)
    }
}) 

function addSmileyes(n) {

    document.querySelectorAll('.smiley').forEach(e => e.remove());

    for (let i = 0 ; i < n ; i++) {
        const smiley = document.createElement('img')
        smiley.className = 'smiley';
        smiley.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Smiley.svg/1024px-Smiley.svg.png'
        smiley.style.width = '50px'
        smileyesDiv.append(smiley);
    }

}