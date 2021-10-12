const settings = document.querySelector('.settings');
const game = document.querySelector('.game');
const gameSection = document.querySelector('.gameSection');
const remainGuessesSpan = document.querySelector('.remainGuessesSpan');
const restartBtn = document.querySelector('.restartBtn');
const easyBtn = document.querySelector('.easyBtn');
const hardBtn = document.querySelector('.hardBtn');
const modeBtn1 = document.querySelector('.modeBtn1');
const modeBtn2 = document.querySelector('.modeBtn2');
const minutesElement = document.querySelector('.minutes')
const secondsElement = document.querySelector('.seconds')
const gameOverMessage = document.querySelector('.gameOverMessage')

let gameSize = 12;
let cardClickedCounter = 0;
let gameArray = [];
let currentCard = 0;
let firstCard = 0;
let secondCard = 0;
let firstCardID = 0;
let secondCardID = 0
let remainGuesses = 5;
let difficality = 'easy';
let mode = 'mode1';
let intervalId;
let seconds = 0;
let minutes = 0;
let correctMatches = 0;
let clickable = true;

let dogsImagesArray = [];
let demoDogsImagesArray = [
    'https://images.dog.ceo/breeds/mastiff-tibetan/n02108551_2025.jpg',
    'https://images.dog.ceo/breeds/mastiff-tibetan/n02108551_2025.jpg',
    'https://images.dog.ceo/breeds/bluetick/n02088632_2321.jpg',
    'https://images.dog.ceo/breeds/bluetick/n02088632_2321.jpg',
    'https://images.dog.ceo/breeds/coonhound/n02089078_4544.jpg',
    'https://images.dog.ceo/breeds/coonhound/n02089078_4544.jpg',
    'https://images.dog.ceo/breeds/komondor/n02105505_4271.jpg',
    'https://images.dog.ceo/breeds/komondor/n02105505_4271.jpg',
    'https://images.dog.ceo/breeds/havanese/00100trPORTRAIT_00100_BURST20191222103956878_COVER.jpg',
    'https://images.dog.ceo/breeds/havanese/00100trPORTRAIT_00100_BURST20191222103956878_COVER.jpg',
    'https://images.dog.ceo/breeds/rottweiler/n02106550_12948.jpg',
    'https://images.dog.ceo/breeds/rottweiler/n02106550_12948.jpg'
];

let image1 = 'https://images.dog.ceo/breeds/mastiff-tibetan/n02108551_2025.jpg';
let image2 = 'https://images.dog.ceo/breeds/bluetick/n02088632_2321.jpg';
let image3 = 'https://images.dog.ceo/breeds/coonhound/n02089078_4544.jpg';
let image4 = 'https://images.dog.ceo/breeds/komondor/n02105505_4271.jpg';
let image5 = 'https://images.dog.ceo/breeds/havanese/00100trPORTRAIT_00100_BURST20191222103956878_COVER.jpg';
let image6 = 'https://images.dog.ceo/breeds/rottweiler/n02106550_12948.jpg';
let image7 = 'https://images.dog.ceo/breeds/hound-walker/n02089867_2815.jpg';
let image8 = 'https://images.dog.ceo/breeds/deerhound-scottish/n02092002_6695.jpg';
let image9 = 'https://images.dog.ceo/breeds/spaniel-cocker/n02102318_5790.jpg';
let image10 = 'https://images.dog.ceo/breeds/clumber/n02101556_3140.jpg';

let catImage1 = 'https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png';
let catImage2 = 'https://cdn.britannica.com/39/7139-050-A88818BB/Himalayan-chocolate-point.jpg';
let catImage3 = 'https://images.newscientist.com/wp-content/uploads/2021/04/27105841/gettyimages-955480082_web.jpg';
let catImage4 = 'https://ychef.files.bbci.co.uk/976x549/p07ryyyj.jpg';
let catImage5 = 'https://static01.nyt.com/images/2021/09/14/science/07CAT-STRIPES/07CAT-STRIPES-mediumSquareAt3X-v2.jpg';
let catImage6 = 'https://media.newyorker.com/photos/590971712179605b11ad7a88/4:3/w_1787,h_1340,c_limit/Jabr-AreCatsDomesticated.jpg';
let catImage7 = 'https://static.dw.com/image/50267514_6.jpg';
let catImage8 = 'https://cdn.mos.cms.futurecdn.net/yzV5i2F35i9RozwSeFLPJV.jpg';
let catImage9 = 'https://media.npr.org/assets/img/2021/08/17/gettyimages-135773550-bb02ff79dd836d6e4170d4bc555423f24fa29d5e-s1100-c50.jpg';
let catImage10 = 'https://www.sciencealert.com/images/2021-07/processed/CatWearingMedicalFaceMaskWhileSittingOnCouch_600.jpg';

// setDogsImages()

function setDogsImages() {
    axios.get('https://dog.ceo/api/breeds/image/random').then((response) => {
        console.log(response.data.message);
    })
}



addClickEventListeners()

function addCardsToGameSection() {

    let cards = document.querySelectorAll('.card');
    for (card of cards) {
        card.remove();
    }

    for (let i = 0 ; i < gameSize ; i++) {
        let card = document.createElement('div');
        card.innerHTML = '';
        card.setAttribute('id', i);
        card.classList.add('card');
        card.classList.add('card'+i);

        card.addEventListener('click', cardClicked)

        gameSection.append(card);
    }

}

function cardClicked() {
    console.log('card clicked ' + this.id);

    if(clickable) {
        this.innerHTML = ''+(+this.id + 1);

        if (cardClickedCounter == 0) {
            firstCard = gameArray[+this.id];
            firstCardID = +this.id;
        }
        if (cardClickedCounter == 1) {
            secondCard = gameArray[+this.id];
            secondCardID = +this.id;
    
            cardClickedCounter = -1;
            clickable = false;
            checkIfCardsMatch();
        }
    
        cardClickedCounter++;

    }
    
}

function setGameArray() {
    for (let i = 0 ; i < gameSize/2 ; i++) {
        gameArray.push(i+1);
        gameArray.push(i+1);
    }
}

function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    while (currentIndex != 0) {
  
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
    
        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];

        [demoDogsImagesArray[currentIndex], demoDogsImagesArray[randomIndex]] = [
            demoDogsImagesArray[randomIndex], demoDogsImagesArray[currentIndex]];

    }
  
    return array;
}

function checkIfCardsMatch() {
    console.log('checkIfCardsMatch ' + firstCard + ' ' + secondCard + ' | ' + firstCardID + ' ' + secondCardID);

    if (firstCard == secondCard) {
        console.log('MATCH ');

        let first = document.querySelector('.card'+firstCardID);
        let second = document.querySelector('.card'+secondCardID);

        first.style.background = `url(${demoDogsImagesArray[firstCardID]}) center center/cover`
        second.style.background = `url(${demoDogsImagesArray[secondCardID]}) center center/cover`


        setTimeout(() => {
            first.style.visibility = 'hidden';
            second.style.visibility = 'hidden';
            clickable = true;
            // first.style.opacity = '0.3';
            // second.style.opacity = '0.3';
        }, 2000);

        correctMatches += 2;
        if (correctMatches == gameSize) {
            gameOverMessage.innerHTML = 'WINNER!!!'
            settings.style.display = 'flex';
            game.style.display = 'none';
        }

    } else {
        console.log('NO MATCH');

        let first = document.querySelector('.card'+firstCardID);
        let second = document.querySelector('.card'+secondCardID);

        // first.style.background = 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/American-akita.jpg/220px-American-akita.jpg) center center/cover'
        first.style.background = `url(${demoDogsImagesArray[firstCardID]}) center center/cover`
        second.style.background = `url(${demoDogsImagesArray[secondCardID]}) center center/cover`

        

        setTimeout(() => {
            first.innerHTML = '';
            second.innerHTML = '';

            first.style.background = '#000'
            second.style.background = '#000'

            clickable = true;
        }, 2000);
        

        setRemainGuesses(--remainGuesses);

        if (remainGuesses == 0) {
            console.log('GAME OVER');
            gameOverMessage.innerHTML = 'LOSSER!!!'

            settings.style.display = 'flex';
            game.style.display = 'none';

        }
    }

   


}

function setRemainGuesses(guess) {
    remainGuesses = guess;
    remainGuessesSpan.innerHTML = remainGuesses;
}

function addClickEventListeners() {

    restartBtn.addEventListener('click', () => {
        restrartClicked();
    });

    easyBtn.addEventListener('click', () => {
        console.log('easyBtn clicked');
        removeAllSelectedDifficality();
        easyBtn.classList.add('difficalitySelected');
        difficality = 'easy';
    });

    hardBtn.addEventListener('click', () => {
        console.log('hardBtn clicked');
        removeAllSelectedDifficality();
        hardBtn.classList.add('difficalitySelected');
        difficality = 'hard';
    });

    modeBtn1.addEventListener('click', () => {
        console.log('modeBtn1 clicked');
        removeAllSelectedMode()
        modeBtn1.classList.add('modeSelected');
        mode = 'mode1';
    });

    modeBtn2.addEventListener('click', () => {
        console.log('modeBtn2 clicked');
        removeAllSelectedMode()
        modeBtn2.classList.add('modeSelected');
        mode = 'mode2';
    });

}


function restrartClicked() {

    console.log('restart clicked ' + difficality + ' ' + mode);

    gameSize = difficality == 'easy' ? 12 : 20;
    cardClickedCounter = 0;
    gameArray = [];
    currentCard = 0;
    firstCard = 0;
    secondCard = 0;
    firstCardID = 0;
    secondCardID = 0;
    remainGuesses = difficality == 'easy' ? 5 : 7;

    addCardsToGameSection()
    setGameArray()
    initiatArrays()
    setRemainGuesses(remainGuesses)
    shuffle(gameArray)
    console.log(gameArray);

    settings.style.display = 'none';
    game.style.display = 'flex';

    clearInterval(intervalId);
    intervalId = window.setInterval(function(){
        runTimmer() 
    }, 1000);

}


function removeAllSelectedDifficality() {
    let btns = document.querySelectorAll('.difficalityBtn');
    for (btn of btns ) {
        btn.classList.remove('difficalitySelected');
    }
}

function removeAllSelectedMode() {
    let btns = document.querySelectorAll('.modeSelected');
    for (btn of btns ) {
        btn.classList.remove('modeSelected');
    }
}


function runTimmer() {

    seconds++
    if (seconds == 60) {
        seconds = 0;
        minutes++
        if (minutes == 60) {
            minutes = 0
            clearInterval(intervalId) 
        }
    }

    secondsElement.innerHTML = seconds < 10 ? '0'+seconds : seconds;
    minutesElement.innerHTML = minutes < 10 ? '0'+minutes : minutes;

}


function initiatArrays() {
    demoDogsImagesArray = [];

    if (mode == 'mode1') {

        demoDogsImagesArray.push(image1);
        demoDogsImagesArray.push(image1);
        demoDogsImagesArray.push(image2);
        demoDogsImagesArray.push(image2);
        demoDogsImagesArray.push(image3);
        demoDogsImagesArray.push(image3);
        demoDogsImagesArray.push(image4);
        demoDogsImagesArray.push(image4);
        demoDogsImagesArray.push(image5);
        demoDogsImagesArray.push(image5);
        demoDogsImagesArray.push(image6);
        demoDogsImagesArray.push(image6);

        if (difficality != 'easy') {
            demoDogsImagesArray.push(image7);
            demoDogsImagesArray.push(image7);
            demoDogsImagesArray.push(image8);
            demoDogsImagesArray.push(image8);
            demoDogsImagesArray.push(image9);
            demoDogsImagesArray.push(image9);
            demoDogsImagesArray.push(image10);
            demoDogsImagesArray.push(image10);
        }
        
    } else {

        demoDogsImagesArray.push(catImage1);
        demoDogsImagesArray.push(catImage1);
        demoDogsImagesArray.push(catImage2);
        demoDogsImagesArray.push(catImage2);
        demoDogsImagesArray.push(catImage3);
        demoDogsImagesArray.push(catImage3);
        demoDogsImagesArray.push(catImage4);
        demoDogsImagesArray.push(catImage4);
        demoDogsImagesArray.push(catImage5);
        demoDogsImagesArray.push(catImage5);
        demoDogsImagesArray.push(catImage6);
        demoDogsImagesArray.push(catImage6);

        if (difficality != 'easy') {
            demoDogsImagesArray.push(catImage7);
            demoDogsImagesArray.push(catImage7);
            demoDogsImagesArray.push(catImage8);
            demoDogsImagesArray.push(catImage8);
            demoDogsImagesArray.push(catImage9);
            demoDogsImagesArray.push(catImage9);
            demoDogsImagesArray.push(catImage10);
            demoDogsImagesArray.push(catImage10);
        }

    }
    
}
