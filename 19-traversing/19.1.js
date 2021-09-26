const startHere = document.querySelector('.start-here')
startHere.innerHTML = 'main title'


const subTitle = document.querySelector('.sub-title')
const subTitle4 = document.createElement('li')
subTitle4.innerHTML = 'sub title 4';
subTitle.append(subTitle4)



// const mainList = document.querySelector('.main-list')

const mainList = document.querySelector('.main-list')
let mainListChildren = mainList.children

mainListChildren[mainListChildren.length - 1].remove() 

document.title = 'Master Of The Dom'


const text = document.querySelector('.text')
text.innerHTML = 'yosuef'

