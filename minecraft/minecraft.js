const start = document.querySelector('#start');
const game = document.querySelector('#game');
const rotate = document.querySelector('#rotate');

const inventory = document.querySelector('#inventory');
const playArea = document.querySelector('#playArea');
const playField = document.querySelector('#playField');
const weapons = document.querySelector('#weapons');


const fieldComponent = document.querySelector('.fieldComponent');

const size = document.querySelector('.size');

const shovel = document.querySelector('.shovel')
const pickaxe = document.querySelector('.pickaxe')
const axe = document.querySelector('.axe')
const sun = document.querySelector('.sun')

const InCloud = document.querySelector('.InCloud')
const InTrunk = document.querySelector('.InTrunk')
const InPlan = document.querySelector('.InPlan')
const InRock = document.querySelector('.InRock')

const restartBtn = document.querySelector('.restartBtn')
const startBtn = document.querySelector('.startBtn')



let currentWeapon = 'notSelected';
let currentInventory = 'notSelected';

let componentSize = {width: 50, height: 50}
let screenComponentsNum = {x: 0, y: 0}

screenComponentsNum.x = Math.floor(playArea.getBoundingClientRect().width/componentSize.width)
screenComponentsNum.y = Math.floor(playArea.getBoundingClientRect().height/componentSize.height)

let groundHeight = Math.floor(screenComponentsNum.y/4);
let cellsCount = screenComponentsNum.x * screenComponentsNum.y;


let cloudHeight = 4

let treeTrunkHeight = 3
let treeLeavesHeight = 3

let planWidth = 3



let width = window.innerWidth;
let height = window.innerHeight;

console.log('screenSize ' + width + ' ' + height);




function draw() {
   
    drawGround()
    drawRocks()
    drawTrunk()
    drawTreeLeaves()
    drawPlan()
    drawCloud()
}



function setPlayFieldStyle() {
    playField.style.width = (screenComponentsNum.x * componentSize.width) + 'px'
    playField.style.height = (screenComponentsNum.y * componentSize.height) + 'px'

    playField.style.gridTemplateRows = 'repeat('+screenComponentsNum.y+', 1fr)'
    playField.style.gridTemplateColumns = 'repeat('+screenComponentsNum.x+', 1fr)'
}

function setFieldComponents() {

    for (let i = 0 ; i < screenComponentsNum.x*screenComponentsNum.y ; i++) {
        let fieldComponent = document.createElement('div');
        fieldComponent.style.width = componentSize.width + 'px'
        fieldComponent.style.height = componentSize.height + 'px'
        fieldComponent.classList.add('fieldComponent');
        fieldComponent.classList.add('fieldComponent'+i);
        fieldComponent.classList.add('sky');

        fieldComponent.addEventListener('click', fieldComponentClicked)

        playField.append(fieldComponent);
    }

}




function drawGround() {

    // let groundComponent = document.querySelector('.fieldComponent3');
    // groundComponent.classList.add('ground');

    for (let i = 0 ; i < screenComponentsNum.x*groundHeight ; i++) {

        let index = screenComponentsNum.x * screenComponentsNum.y - 1 - i
        let groundComponent = document.querySelector('.fieldComponent'+index);
        groundComponent.classList.remove('sky');
        groundComponent.classList.add('ground');

    }

    for (let i = 0 ; i < screenComponentsNum.x ; i++) {
        let index = screenComponentsNum.x * screenComponentsNum.y - (screenComponentsNum.x * groundHeight) - 1 - i
        let groundComponent = document.querySelector('.fieldComponent'+index);
        groundComponent.classList.remove('sky');
        groundComponent.classList.add('groundSurface'); 
    }

}


function drawRocks() {

    let index = screenComponentsNum.x * screenComponentsNum.y - (screenComponentsNum.x * (groundHeight + 1)) - 1 
    let groundComponent = document.querySelector('.fieldComponent'+index);
    groundComponent.classList.remove('sky');
    groundComponent.classList.add('rock');

    index = screenComponentsNum.x * screenComponentsNum.y - (screenComponentsNum.x * (groundHeight + 1)) - 1 - Math.floor(screenComponentsNum.x/2)
    groundComponent = document.querySelector('.fieldComponent'+index);
    groundComponent.classList.remove('sky');
    groundComponent.classList.add('rock');

    index = screenComponentsNum.x * screenComponentsNum.y - (screenComponentsNum.x * (groundHeight + 1)) - 2 - Math.floor(screenComponentsNum.x/2)
    groundComponent = document.querySelector('.fieldComponent'+index);
    groundComponent.classList.remove('sky');
    groundComponent.classList.add('rock');

    index = screenComponentsNum.x * screenComponentsNum.y - (screenComponentsNum.x * (groundHeight + 1)) - 1 - Math.floor(screenComponentsNum.x/2) - screenComponentsNum.x
    groundComponent = document.querySelector('.fieldComponent'+index);
    groundComponent.classList.remove('sky');
    groundComponent.classList.add('rock');

    index = screenComponentsNum.x * screenComponentsNum.y - (screenComponentsNum.x * (groundHeight + 1)) - 2 - Math.floor(screenComponentsNum.x/2) - screenComponentsNum.x
    groundComponent = document.querySelector('.fieldComponent'+index);
    groundComponent.classList.remove('sky');
    groundComponent.classList.add('rock');

}

function drawCloud() {

    let startPosition = 1;

    for (let i = 1 ; i < cloudHeight - 1 ; i++) {

        let index = screenComponentsNum.x + startPosition + i

        if (index >= 0 && index < cellsCount) {
            let groundComponent = document.querySelector('.fieldComponent'+index);
            if (groundComponent.classList[2] == 'sky') {
                groundComponent.classList.remove('sky');
                groundComponent.classList.add('cloud');
            }
            
        }

    }

    for (let i = 0 ; i < cloudHeight ; i++) {

        let index = 2*screenComponentsNum.x + startPosition + i
        
        if (index >= 0 && index < cellsCount) {
            let groundComponent = document.querySelector('.fieldComponent'+index);
            if (groundComponent.classList[2] == 'sky') {
                groundComponent.classList.remove('sky');
                groundComponent.classList.add('cloud');
            }
            
        }

    }

}


function drawTrunk() {

    for (let i = 0 ; i < treeTrunkHeight ; i++) {

        let index = screenComponentsNum.x * screenComponentsNum.y - (screenComponentsNum.x * (groundHeight + 1)) - (screenComponentsNum.x * i) - 4 
        let groundComponent = document.querySelector('.fieldComponent'+index);
        groundComponent.classList.remove('sky');
        groundComponent.classList.add('trunk');

    }

}


function drawTreeLeaves() {

    for (let j = 0 ; j < treeLeavesHeight ; j++) {

        for (let i = 0 ; i < treeLeavesHeight ; i++) {
            let index = screenComponentsNum.x * screenComponentsNum.y - (screenComponentsNum.x * (groundHeight + 1)) - (screenComponentsNum.x * treeTrunkHeight) - (screenComponentsNum.x*j) - 3 - i 
           
            
            if (index >= 0 && index < cellsCount) {
                let groundComponent = document.querySelector('.fieldComponent'+index);
                
                if (groundComponent.classList[2] == 'sky') {
                    groundComponent.classList.remove('sky');
                    groundComponent.classList.add('plan');
                }
                
            }

            
           
    
        }

    }

}


function drawPlan() {

    let startPosition = 1;

    for (let i = 1 ; i < planWidth - 1 ; i++) {

        let index = screenComponentsNum.x * screenComponentsNum.y - (screenComponentsNum.x * (groundHeight + 3)) + 1 + i 
        let groundComponent = document.querySelector('.fieldComponent'+index);
        groundComponent.classList.remove('sky');
        groundComponent.classList.add('plan');

    }

    for (let i = 0 ; i < planWidth ; i++) {

        let index = screenComponentsNum.x * screenComponentsNum.y - (screenComponentsNum.x * (groundHeight + 2)) + 1 + i 
        let groundComponent = document.querySelector('.fieldComponent'+index);
        groundComponent.classList.remove('sky');
        groundComponent.classList.add('plan');

    }

}






shovel.addEventListener('click', () => {
    console.log('shovel clicked');
    currentInventory = 'notSelected'
    currentWeapon = 'shovel'

    removeAllSelected()
    shovel.classList.add('selected');
})

pickaxe.addEventListener('click', () => {
    console.log('pickaxe clicked');
    currentInventory = 'notSelected'
    currentWeapon = 'pickaxe'

    removeAllSelected()
    pickaxe.classList.add('selected');
})

axe.addEventListener('click', () => {
    console.log('axe clicked');
    currentInventory = 'notSelected'
    currentWeapon = 'axe'

    removeAllSelected()
    axe.classList.add('selected');
})

sun.addEventListener('click', () => {
    console.log('sun clicked');
    currentInventory = 'notSelected'
    currentWeapon = 'sun'

    removeAllSelected()
    sun.classList.add('selected');
})


InCloud.addEventListener('click', () => {
    console.log('InCloud clicked');
    currentWeapon = 'notSelected'
    currentInventory = 'InCloud'

    removeAllSelected()
    InCloud.classList.add('selected');
})

InRock.addEventListener('click', () => {
    console.log('InRock clicked');
    currentWeapon = 'notSelected'
    currentInventory = 'InRock'

    removeAllSelected()
    InRock.classList.add('selected');
})


InTrunk.addEventListener('click', () => {
    console.log('InTrunk clicked');
    currentWeapon = 'notSelected'
    currentInventory = 'InTrunk'

    removeAllSelected()
    InTrunk.classList.add('selected');
})


InPlan.addEventListener('click', () => {
    console.log('InPlan clicked');
    currentWeapon = 'notSelected'
    currentInventory = 'InPlan'

    removeAllSelected()
    InPlan.classList.add('selected');
})

restartBtn.addEventListener('click', () => {
    console.log('restartBtn clicked');

    

    game.style.display = 'none';
    start.style.display = 'flex';
    rotate.style.display = 'none';


    removeAllSelected()

    window.location.reload();

    // let fieldComponents = document.querySelectorAll('.fieldComponent');
    // for (comp of fieldComponents ) {
    //     comp.classList.remove('sky');
    //     comp.classList.remove('ground');
    //     comp.classList.remove('groundSurface');
    //     comp.classList.remove('rock');
    //     comp.classList.remove('cloud');
    //     comp.classList.remove('trunk');
    //     comp.classList.remove('plan');

    //     comp.classList.add('sky');
    // }
    
    // draw()
})


startBtn.addEventListener('click', () => {
    console.log('startBtn clicked ' + size.value);

    if (+size.value > 7 && +size.value < 18) {

        game.style.display = 'flex';
        start.style.display = 'none';
        rotate.style.display = 'none';

        screenComponentsNum.x = +size.value < Math.floor(playArea.getBoundingClientRect().width/componentSize.width) ? +size.value : Math.floor(playArea.getBoundingClientRect().width/componentSize.width)
        screenComponentsNum.y = Math.floor(playArea.getBoundingClientRect().height/componentSize.height)
    
        groundHeight = Math.floor(screenComponentsNum.y/4);
        cellsCount = screenComponentsNum.x * screenComponentsNum.y;
    
        if (width < 768 && height > width) {
    
        
    
        } else {
        
            console.log('Component size: ' + playArea.getBoundingClientRect().width + ' ' + screenComponentsNum.x + ' ' + screenComponentsNum.y + ' ' + screenComponentsNum.x * componentSize.width);
            
            removeAllSelected()

            setPlayFieldStyle()
            setFieldComponents()
            draw()
            
        }
    }


    // removeAllSelected()

    // let fieldComponents = document.querySelectorAll('.fieldComponent');
    // for (comp of fieldComponents ) {
    //     comp.classList.remove('sky');
    //     comp.classList.remove('ground');
    //     comp.classList.remove('groundSurface');
    //     comp.classList.remove('rock');
    //     comp.classList.remove('cloud');
    //     comp.classList.remove('trunk');
    //     comp.classList.remove('plan');

    //     comp.classList.add('sky');
    // }
    
    // setPlayFieldStyle()
    // setFieldComponents()
    // draw()
})


function removeAllSelected() {
    let invents = document.querySelectorAll('.invent');
    for (invent of invents ) {
        invent.classList.remove('selected');
    }

    let weapons = document.querySelectorAll('.weapon');
    for (weapon of weapons ) {
        weapon.classList.remove('selected');
    }
}

function fieldComponentClicked() {
    
    let index = +this.classList[1].replace('fieldComponent','');
    let component = this.classList[2]
    console.log('fieldComponentt ' + component + ' ' + index + ' ' + screenComponentsNum.x + ' ' + cellsCount);

    if (component == 'sky' && currentInventory == 'InCloud') {
        this.classList.remove(component);
        this.classList.add('cloud');
    }

    if (component == 'cloud' && currentWeapon == 'sun') {
        this.classList.remove(component);
        this.classList.add('sky');
    }


    if (component == 'sky' && currentInventory == 'InRock') {

        if (index+screenComponentsNum.x < cellsCount -1) {
            let componentBelow = document.querySelector('.fieldComponent'+ (index+screenComponentsNum.x)).classList[2]
            if (componentBelow == 'rock' || componentBelow == 'ground' || componentBelow == 'groundSurface') {
                this.classList.remove(component);
                this.classList.add('rock');
            }
        }
       
    }

    if (component == 'rock' && currentWeapon == 'axe') {

        if (index-screenComponentsNum.x >= 0) {
            let componentAbove = document.querySelector('.fieldComponent'+ (index-screenComponentsNum.x)).classList[2]
            if (componentAbove != 'rock') {
                this.classList.remove(component);
                this.classList.add('sky');
            }
        } else if (index < screenComponentsNum.x) {
            this.classList.remove(component);
            this.classList.add('sky');
        }

    }



    if (component == 'sky' && currentInventory == 'InTrunk') {

        if (index+screenComponentsNum.x < cellsCount - screenComponentsNum.x - 1) {
            let componentBelow = document.querySelector('.fieldComponent'+ (index+screenComponentsNum.x)).classList[2]
            if (componentBelow == 'trunk' || componentBelow == 'ground' || componentBelow == 'groundSurface') {
                this.classList.remove(component);
                this.classList.add('trunk');
            }
        }

    }

    if ((component == 'plan' || component == 'trunk') && currentWeapon == 'pickaxe') {
        console.log(component + ' ' + currentWeapon);

        if (index-screenComponentsNum.x >= 0) {
            let componentAbove = document.querySelector('.fieldComponent'+ (index-screenComponentsNum.x)).classList[2]
            
            if (componentAbove != 'plan' && componentAbove != 'trunk') {
                this.classList.remove(component);
                this.classList.add('sky');
            }
        } else if (index < screenComponentsNum.x) {
            this.classList.remove(component);
            this.classList.add('sky');
        }

    }


    if (component == 'sky' && currentInventory == 'InPlan') {
        let x = typeof (index + +screenComponentsNum.x)
        console.log('InPlan ' + component + ' ' + currentInventory + ': ' + (index + screenComponentsNum.x) + ' ' + ' ' + (cellsCount - screenComponentsNum.x - 1) + ' | ' + (index+screenComponentsNum.x < (cellsCount - screenComponentsNum.x - 1)));
        
        if (index + screenComponentsNum.x < (cellsCount - screenComponentsNum.x - 1)) {
            console.log('InPlann ' + component + ' ' + currentInventory + ' ' + cellsCount + ' ' + screenComponentsNum.x + ' ' + index);
 
            let componentBelow = document.querySelector('.fieldComponent'+ (index + +screenComponentsNum.x)).classList[2]
            if (componentBelow == 'trunk' || componentBelow == 'ground' || componentBelow == 'groundSurface' || componentBelow == 'plan') {
                this.classList.remove(component);
                this.classList.add('plan');
            }
        }
       
    }


    // if (component == 'sky' && currentInventory == 'InPlan') {
    //     this.classList.remove(component);
    //     this.classList.add('plan');
    // }

    // if ((component == 'plan' || component == 'trunk') && currentWeapon == 'pickaxe') {
    //     this.classList.remove(component);
    //     this.classList.add('sky');
    // }



    if (component == 'groundSurface' && currentWeapon == 'shovel') {

        let removed = false;
        
        if (index-screenComponentsNum.x >= 0) {
            console.log(component + ' ' + currentWeapon);
            let componentAbove = document.querySelector('.fieldComponent'+ (index-screenComponentsNum.x)).classList[2]
            if (componentAbove == 'sky') {
                this.classList.remove(component);
                this.classList.add('sky');
                removed = true
            }
        } else if (index < screenComponentsNum.x) {
            this.classList.remove(component);
            this.classList.add('sky');
            removed = true
        }

        if ((index+screenComponentsNum.x) < cellsCount && removed) {
            console.log(component + ' 1 ' + currentWeapon);
            let componentBelow = document.querySelector('.fieldComponent'+ (index+screenComponentsNum.x)).classList[2]
            if (componentBelow == 'ground') { 
                console.log(component + ' 2 ' + currentWeapon);
                document.querySelector('.fieldComponent'+ (index+screenComponentsNum.x)).classList.remove(componentBelow)
                document.querySelector('.fieldComponent'+ (index+screenComponentsNum.x)).classList.add('groundSurface');
            }
        }

    }

}


window.addEventListener("orientationchange", function() {

    let width = window.innerWidth;
    let height = window.innerHeight;

    window.location.reload();
    console.log('orientationchange ' + width + ' ' + height);

})