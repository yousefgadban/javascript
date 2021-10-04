const wonderWoman = {
    name: "Diana Prince"
}

const batman = {
    name: "Bruce Wayne"
}

function printName() {
    console.log(`my name is ${this.name}`);
}

const superHeroes = [wonderWoman, batman];


function printHeroes(heroes, printFunc) {

    heroes.forEach(element => {
        printFunc.call(element)
    });

}

printHeroes(superHeroes, printName)
