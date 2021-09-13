const array = [1,7,3,0,-5,7,3,9];

function printArr(arr) {
    let print = '';
    for (let i = 0 ; i < arr.length ; i++) {
        print += arr[i] + ' ';
    }
    return print;
}

console.log(printArr(array));

function arrLength(arr) {
    let count = 0;
    arr.forEach(element => {
       count++; 
    });
    return count;
}

console.log(arrLength(array));


function arrayMulti(arr) {
    let multi = 1;
    arr.forEach(element => {
        multi = multi * element; 
    });
    return multi;
}

console.log(arrayMulti(array));