const foods = ["falafel", "sabich", "hummus", "pizza with extra pineapple"];

foods.sort()

//console.log(foods);



//console.log(foods.reverse());



// 2

const foodsWithUpperCase = [
    "falafel",
    "Sabich",
    "hummus",
    "pizza with extra pineapple",
];

foodsWithUpperCase.sort()

// console.log(foodsWithUpperCase);

const words = ["apple", "supercalifragilisticexpialidocious",
"hi", "zoo"];

words.sort(function(a, b) { return b.length - a.length });

console.log(words);

