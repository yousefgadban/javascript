// Block 1

// function will print
// undefined for 'a', beacuase a is defined after the log
// and 2 for calling foo();


// Block 2
// Aurelio De Rosa for full name
// test() is not defined, there are no function test

// Block 3
// a undefined outside the function
// typeof b is number, it is declared as var 

// Block 4
// calling the second function twice and logs 2 2 because functions are hoisting

// block 5
// d = 1 declared as global var
// e is not defined


// block 6
// Value of f in global scope:  undefined
// Value of f in local scope:  1

function funcE() {
    console.log("Value of f in local scope: ", f);
}

console.log("Value of f in global scope: ", f);

var f = 1;

funcE();