const myObj = {
    name: "Timmy",
    // greet: () => {
    //     console.log(`Hello ${this.name}`);
    // },

    greet: function() {
        console.log(`Hello ${this.name}`);
    },

};

// console.log(myObj.name);
// myObj.greet();

// const myFuncDec = function () {
//     console.log(this);
// };

// myFuncDec()


// const myFuncArrow = () => {
//     console.log(this);
// };
// myFuncArrow();


// let ele = document.querySelector(".element");
// ele.addEventListener('click', function () {
//     console.log(this);
// });


const storm = {
    // add code here
    superPower: 'flying', 
    printSuperPower: function () {
        console.log("my superpower is " + this.superPower);
    }
}


function printSuperPower() {
    console.log("my superpower is " + this.superPower);
}

storm.printSuperPower()
//console.log();

