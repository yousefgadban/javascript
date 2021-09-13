function calcAverage(num1, num2, num3) {
    return (num1 + num2 + num3)/3;
}

let johnAvgScore = calcAverage(89, 120, 103);
let mikeAvgScore =  calcAverage(116, 94, 123);
let mikeAvgScore =  calcAverage(116, 94, 123);

//let mikeAvgScore =  calcAverage(89, 120, 103);

console.log('johnAvgScore ' + johnAvgScore);
console.log('mikeAvgScore ' + mikeAvgScore);

function winnerByAverage() {
    if (johnAvgScore > mikeAvgScore) {
        return 'winner by avg is john, avg score ' + johnAvgScore;
    } else if (johnAvgScore < mikeAvgScore) {
        return 'winner by avg is mike, avg score ' + mikeAvgScore;
    } else {
        return 'Draw, avg score ' + mikeAvgScore;
    }
}

console.log(winnerByAverage());


