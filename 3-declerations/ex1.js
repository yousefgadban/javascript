function percentageOfWorld1(population) {
    return (population/7900*100).toFixed(2);
}

let china = percentageOfWorld1(1441);
let india = percentageOfWorld1(3535);
let spain = percentageOfWorld1(2433);

console.log(china);
console.log(india);
console.log(spain);

let expression = function percentageOfWorld2(population) {
    return (population/7900*100).toFixed(2);
}

console.log(expression);