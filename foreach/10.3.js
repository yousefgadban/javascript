const data = [
    {
        name: "John",
        birthday: "1-1-1995",
        favoriteFoods: {
        meats: ["hamburgers", "sausages"],
        fish: ["salmon", "pike"],
    },
    },
    {
        name: "Mark",
        birthday: "10-5-1980",
        favoriteFoods: {
        meats: ["hamburgers", "steak", "lamb"],
        fish: ["tuna", "salmon", "barracuda"],
    },
    },
    {
    name: "Mary",
    birthday: "1-10-1977",
    favoriteFoods: {
    meats: ["ham", "chicken"],
    fish: ["pike"],
    },
    },
    {
    name: "Thomas",
    birthday: "1-10-1990",
    favoriteFoods: {
    meats: ["bird", "rooster"],
    fish: ["salmon"],
    },
    },
    {
    name: "Mary",
    birthday: "1-10-1977",
    favoriteFoods: {
    meats: ["hamburgers", "lamb"],
    fish: ["anchovies", "tuna"],
    },
    },
];


function allNames(array){
    let arr = array.map(e => {
        return e.name;
    })

    return arr
}

// console.log(allNames(data));


function bornBefore80(array){
    let arr = array.filter(e => {
        if (+e.birthday.slice(-4) < 1980 ) {
            return e;
        }
        //return +e.birthday.slice(-4) < 1980 ? e ;
    })

    return arr
}

//console.log(bornBefore80(data));


function food(array) {

    foodObj = {};

    array.forEach(element => {

        (element.favoriteFoods.meats).forEach(food => {
            
            if (foodObj.hasOwnProperty(food) ) {
                foodObj[food]++;
            } else {
                foodObj[food] = 1;
            }

        });

        (element.favoriteFoods.fish).forEach(food => {
            
            if (foodObj.hasOwnProperty(food) ) {
                foodObj[food]++;
            } else {
                foodObj[food] = 1;
            }

        });
        
    });

    return foodObj;

}

console.log(food(data));


