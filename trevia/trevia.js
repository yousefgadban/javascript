const startScreen = document.querySelector('.startScreen'),
    gameScreen = document.querySelector('.gameScreen'),
    loaderScreen = document.querySelector('.loaderScreen'),
    endScreen = document.querySelector('.endScreen'),
    startBtn = document.querySelector('.startBtn'),
    endBtn = document.querySelector('.endBtn'),
    nextBtn = document.querySelector('.nextbtn'),
    previousBtn = document.querySelector('.previousbtn'),
    Question = document.querySelector('.Question'),
    answer1 = document.querySelector('.answer1'),
    answer2 = document.querySelector('.answer2'),
    answer3 = document.querySelector('.answer3'),
    answer4 = document.querySelector('.answer4'),
    score = document.querySelector('.score'),
    playAgainBtn = document.querySelector('.playAgainBtn'),
    finalScore = document.querySelector('.finalScore'),
    chuckJoke = document.querySelector('.chuck-joke'),
    joke = document.querySelector('.joke'),
    categs = document.querySelectorAll('.categ')
    


let currentQuestion = 0;
let selectedAnswer = '';
let questionsNum = 10;
let loadMoreNum = 3;
let questionsArray = [];
let isSelectedAnswer = false;
let categoriesArray = ['All', 'Sport', 'Book', 'Films', 'History'];
let categoryValue = 0;
let answersScore = 0;
let cate = '';


startBtn.addEventListener('click', () => {
    console.log('startBtn clicked');

    updateUI('loaderScreen');

    questionsArray = [];
 
    cate = categoryValue == 0 ? '' : '&category='+categoryValue;
    let url = 'https://opentdb.com/api.php?amount='+questionsNum+''+cate;

    console.log('url ' + url);

    axios.get('https://opentdb.com/api.php?amount='+(questionsNum - loadMoreNum)+''+cate).then((response) => {
        console.log(response.data.results);

        let data = response.data.results

        data.forEach(ques => {
            let question = {
                category: ques.category,
                difficulty: ques.difficulty,
                question: ques.question,
                type: ques.type,
                answers: ques.incorrect_answers,
                correct_answer : ques.correct_answer
            }

            questionsArray.push(question)
        });

        console.log('array ' + questionsArray.length);
        console.log(questionsArray);

        updateUI('gameScreen');

        initiateParams()
        updateQuestion(currentQuestion)

    })

    getChuckJoke()
})


function loadMore() {

    console.log('loadMore ' + currentQuestion);

    axios.get('https://opentdb.com/api.php?amount=3'+cate).then((response) => {
        console.log(response.data.results);

        let data = response.data.results

        data.forEach(ques => {
            let question = {
                category: ques.category,
                difficulty: ques.difficulty,
                question: ques.question,
                type: ques.type,
                answers: ques.incorrect_answers,
                correct_answer : ques.correct_answer
            }

            questionsArray.push(question)
        });

        console.log('array ' + questionsArray.length);
        console.log(questionsArray);

    })

}


function initiateParams() {
    currentQuestion = 0;
    answersScore = 0;
    selectedAnswer = '';
    
    score.innerHTML = `${answersScore}/${questionsNum}`
    finalScore.innerHTML = `${answersScore}/${questionsNum}`
}


endBtn.addEventListener('click', () => {
    console.log('endBtn clicked');
    startScreen.style.display = 'none';
    gameScreen.style.display = 'none';
    loaderScreen.style.display = 'flex';
})


function updateUI(screen) {

    if (screen == 'startScreen') {
        startScreen.style.display = 'flex';
        gameScreen.style.display = 'none';
        loaderScreen.style.display = 'none';
        endScreen.style.display = 'none';
    } else if (screen == 'gameScreen') {
        startScreen.style.display = 'none';
        gameScreen.style.display = 'flex';
        loaderScreen.style.display = 'none';
        endScreen.style.display = 'none';
    } else if (screen == 'loaderScreen') {
        startScreen.style.display = 'none';
        gameScreen.style.display = 'none';
        loaderScreen.style.display = 'flex';
        endScreen.style.display = 'none';
    } else if (screen == 'endScreen') {
        startScreen.style.display = 'none';
        gameScreen.style.display = 'none';
        loaderScreen.style.display = 'none';
        endScreen.style.display = 'flex';

        setJokeText()
        
    }
}



nextBtn.addEventListener('click', () => {
    console.log('nextBtn clicked ' + selectedAnswer + ' ' + questionsArray[currentQuestion].correct_answer);

    if(isSelectedAnswer) {

        if (currentQuestion == 3) {
            loadMore()
        }

        if (selectedAnswer == questionsArray[currentQuestion].correct_answer) {
            answersScore++;
            score.innerHTML = `${answersScore}/${questionsNum}`
        }
    
        if (currentQuestion < questionsNum - 1) {
            currentQuestion++;
            updateQuestion(currentQuestion)
        } else {
            finalScore.innerHTML = `${answersScore}/${questionsNum}`
            updateUI('endScreen')
        }
    } else {
        console.log('Please selecte an answer');
    }

})

addEventListenersToAnswers()

function updateQuestion(index) {
    console.log('updateQuestion index ' + index);
    removeAllSelected()

    Question.innerHTML = questionsArray[index].question
    answer1.innerHTML = questionsArray[index].correct_answer
    answer2.innerHTML = questionsArray[index].answers[0]
    answer3.innerHTML = questionsArray[index].answers[1]
    answer4.innerHTML = questionsArray[index].answers[2]

    selectedAnswer = ''
    isSelectedAnswer = false;

    showAnswers(index)
}


function showAnswers(index) {

    console.log('showAnswers ' + index + ' ' + questionsArray[index].type);

    if (questionsArray[index].type == "boolean") {
        answer3.style.visibility = 'hidden';
        answer4.style.visibility = 'hidden';
    } else {
        answer3.style.visibility = 'visible';
        answer4.style.visibility = 'visible';
    }

}


answer1.addEventListener('click', () => {
    console.log('answer1 clicked ');
    removeAllSelected()
    answer1.classList.add('selected');

    selectedAnswer = questionsArray[currentQuestion].correct_answer;
    isSelectedAnswer = true;
})

answer2.addEventListener('click', () => {
    console.log('answer2 clicked ' );
    removeAllSelected()
    answer2.classList.add('selected');

    selectedAnswer = questionsArray[currentQuestion].answers[0]
    isSelectedAnswer = true;
})

answer3.addEventListener('click', () => {
    console.log('answer3 clicked ' );
    removeAllSelected()
    answer3.classList.add('selected');

    selectedAnswer = questionsArray[currentQuestion].answers[1]
    isSelectedAnswer = true;
})

answer4.addEventListener('click', () => {
    console.log('answer4 clicked ' );
    removeAllSelected()
    answer4.classList.add('selected');

    selectedAnswer = questionsArray[currentQuestion].answers[2]
    isSelectedAnswer = true;
})

function addEventListenersToAnswers() {
    // let answers = document.querySelectorAll('.answer');
    // for (answer of answers ) {
    //     answer.addEventListener('click', () => {
    //         console.log('answer clicked ' + answer.classList);
    //         removeAllSelected()
    //         answer.classList.add('selected');
    //     })
        
    // }
}

addEventListenersToCategories()

function addEventListenersToCategories() {
    for (categ of categs ) {
        categ.addEventListener('click', categoryClicked)
    }
}

function categoryClicked() {

    let index = +this.classList[1].replace('categindex','');
    categoryValue = categoriesArray[index - 1]

    if (index == 1) {
        categoryValue=0;
    } else if (index == 2) {
        categoryValue=21;
    } else if (index == 3) {
        categoryValue=10;
    } else if (index == 4) {
        categoryValue=11;
    } else if (index == 5) {
        categoryValue=23;
    } else {
        categoryValue=0;
    }

    console.log('categoryClicked ' + index + ' ' + categoryValue);

    removeAllCategoriesSelected()
    this.classList.add('selected');
    
}



function removeAllCategoriesSelected() {
    for (categ of categs ) {
        categ.classList.remove('selected');
    }
}


function removeAllSelected() {
    let answers = document.querySelectorAll('.answer');
    for (answer of answers ) {
        answer.classList.remove('selected');
    }
}


playAgainBtn.addEventListener('click', () => {
    console.log('playAgainBtn clicked ' );
    
    updateUI('startScreen')
})


function setJokeText() {

    console.log('setJokeText ' + answersScore + ' ' + Math.floor(questionsNum/2));

    if (answersScore >= Math.floor(questionsNum/2)) {
        joke.innerHTML = 'High score, Here is a joke:'
    } else {
        joke.innerHTML = 'Low score, Here is joke to cheer u up!'
    }
    
}


function getChuckJoke() {

    axios.get('https://api.chucknorris.io/jokes/random').then((response) => {
        console.log(response);

        chuckJoke.innerHTML = `${response.data.value}`
    })

}