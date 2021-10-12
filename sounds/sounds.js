const keys = document.querySelector('.keys');
const input = document.querySelector('.input');

//input.focus();
input.style.display = 'none'

for (let i = 0 ; i < 9 ; i++) {
    let letter = document.createElement('div');
    letter.innerHTML = getLetter((i+1));
    letter.id = ''+(i+1);
    letter.classList.add('letter'+(i+1))
    letter.classList.add('letter')
    letter.addEventListener('click', onLetterClicked)
    keys.append(letter)
}

function onLetterClicked() {
    console.log('letter clicked ' + this.id);
    let l = getLetter(+this.id).toLowerCase();
    let audioElement = new Audio(l+'.wav');
    audioElement.play();

    removeAllSelected();
    this.classList.add('selected')
}

function removeAllSelected() {
    let btns = document.querySelectorAll('.letter');
    for (btn of btns ) {
        btn.classList.remove('selected');
    }
}

window.addEventListener('keyup', (e)=> {
    console.log('keyup ' + e.key);
    
    removeAllSelected();
    if (e.key == 'a') {
        fun(e.key, 1)
    } else if (e.key == 's') {
        fun(e.key, 2)
    } else if (e.key == 'd') {
        fun(e.key, 3)
    } else if (e.key == 'f') {
        fun(e.key, 4)
    } else if (e.key == 'g') {
        fun(e.key, 5)
    } else if (e.key == 'h') {
        fun(e.key, 6)
    } else if (e.key == 'j') {
        fun(e.key, 7)
    } else if (e.key == 'k') {
        fun(e.key, 8)
    } else if (e.key == 'l') {
        fun(e.key, 9)
    }

    

})

function fun(key, ind) {
    let audioElement = new Audio(key+'.wav');
    audioElement.play();
    let l = document.querySelector('.letter'+ind);
    l.classList.add('selected');
}

function getLetter(ind) {

    switch(ind) {
        case 1:
            return 'A'
        case 2:
            return 'S'
        case 3:
            return 'D'
        case 4:
            return 'F'
        case 5:
            return 'G'
        case 6:
            return 'H'
        case 7:
            return 'J'
        case 8:
            return 'K'
        case 9:
            return 'L'
    }

}