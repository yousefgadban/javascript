const people = ["Greg", "Mary", "Devon", "James"];

function printArr(arr) {
    let print = '';
    for (let i = 0 ; i < arr.length ; i++) {
        print += arr[i] + ' ';
    }
    return print;
}

console.log(printArr(people));

function removeGreg(arr, str) {
    let newArr = [];
    arr.forEach(element => {
        if (element != str) {
            newArr.push(element);
        }
    });

    return newArr;
}

console.log(printArr(removeGreg(people, 'Greg')));
console.log(printArr(removeGreg(people, 'Mary')));

function addToFront(arr, str) {
    let newArr = arr.slice();
    newArr.unshift(str);
    return newArr;
}

function addToEnd(arr, str) {
    let newArr = arr.slice();
    newArr.push(str);
    return newArr;
}


function existAfterElement(arr, str) {
    var BreakException = {};
    try {
        arr.forEach(element => {
            console.log(element);
            
                if (element == str) {
                    throw BreakException;
                }
        });
    } catch(e) {
        if (e !== BreakException) throw e;
    }

}

function duplicateArrayWithoutMary(arr) {

    newArr = arr.slice();
    newArr.push('Matt');

    const maryIndex = newArr.indexOf('Mary');
    if (maryIndex > -1) {
        newArr.splice(maryIndex, 1);
    }

    const mattIndex = newArr.indexOf('Matt');
    if (mattIndex > -1) {
        newArr.splice(mattIndex, 1);
    }

    return newArr;

}

function indexOfMary(arr) {
    return arr.indexOf('Mary');
}

function indexOfFoo(arr) {
    return arr.indexOf('Foo');
}

function redefine(arr) {
    newArr = arr.slice();

    const devonIndex = newArr.indexOf('Devon');
    if (devonIndex > -1) {
        newArr.splice(devonIndex, 1);
    }

    newArr.splice(2, 0, "Artie");
    newArr.splice(2, 0, "Elizabeth");

    return newArr;
}

console.log(printArr(addToFront(people, 'Matt')));
console.log(printArr(addToEnd(people, 'Yousef')));
console.log(printArr(people));
existAfterElement(people, 'Mary');


console.log('without mary & matt => ' + printArr(duplicateArrayWithoutMary(people)));
console.log('Index of mary => ' + indexOfMary(people));
console.log('Index of foo => ' + indexOfFoo(people));

console.log('Redefine => ' + printArr(redefine(people)));

// let withBob = people.toString()+'bob';
let withBob = people.concat("Bob");
console.log('withBob ' + withBob);