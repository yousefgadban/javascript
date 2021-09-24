function sumOfLowestNumbers(arr) {

    let min1 = arr.reduce((a, b) => Math.min(a, b));
    let indexOfMin1 = arr.indexOf(min1);
    arr.splice(indexOfMin1, 1);

    let min2 = arr.reduce((a, b) => Math.min(a, b));

    return min1 + min2;

}

//console.log(sumOfLowestNumbers([10, 343445353, 3453445, 3453545353453]));


function binaryToNumber(arr) {

    let num = 0
    let p = 0;
    for (let i = arr.length - 1 ; i >= 0 ; i--) {
        num += arr[i]*(Math.pow(2,p));
        p++;
    }

    return num;
}

// console.log(binaryToNumber([0, 1, 0, 1, 1, 0, 1] ));

function findNextSquare(n) {

    if (!Number.isInteger(Math.sqrt(n))) {
        return -1;
    }

    let next = 0
    let i = 1;
    while(i>0) {
        if (Number.isInteger(Math.sqrt(n+i))) {
            next = n+i;
            i = 0
            break;
        }
        i++;
    }

    return next;

}

//console.log(findNextSquare(121));


function unique(arr) {

    let u = arr[0];
    for (let i = 0 ; i < arr.length ; i++) {
        if (arr[i] != u && arr[1] != arr[2]) {
            u = arr[i];
            break;
        }
    }

    return u;

};

// console.log(unique([ 0, 0, 0.55, 0, 0 ]));

function summation(n) {

    let sum = 0;
    for (let i = 1 ; i <= n ; i++) {
        sum += i;
    }
    return sum;

}

// console.log(summation(2));

function centuryFromYear(year) {

    return year % 100 == 0 ?  Math.floor(year/100) :  Math.floor(year/100) + 1
}

// console.log(centuryFromYear(1901));

function basicOp(opt, n1, n2) {

    switch(opt) {
        case '+':
            return n1 + n2;
        case '-':
            return n1 - n2;
        case '*':
            return n1 * n2;
        default:
            return (n1 / n2).toFixed(2);

    }

}

console.log(basicOp('*', 5, 3));