function chechIfEven(num) {

    return num%2 == 0;

}

console.log(chechIfEven(355));

function avg(num1, num2) {
    return (num1 + num2)/2;
}

// function avgMath(num1, num2) {
//     return Math.avg(num1, num2);
// }

// console.log('avg: ' + avgMath(3,5));

function greater(num1, num2, num3) {

    greater = 0;

    if (num1 > num2 ) {
        greater = num1;
    } else {
        greater = num2;
    } 
    
    if (greater > num3) {
        return greater;
    } else {
        return num3;
    }

    return Math.max(num3, num2, num1);
    
}

console.log(greater(1,5,3));


function max(num1, num2, num3, num4, num5, num6) {

    let max1 = Math.max(num3, num2, num1);
    let max2 = Math.max(num6, num5, num4);
    return(Math.max(max1,max2));

}


console.log();