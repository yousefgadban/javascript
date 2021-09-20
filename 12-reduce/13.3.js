const food = ["Noodle", "Pasta", "Ice-cream", "Meat","Cucumber", "Olives"];
const food1 = ["Fries", "Ice-cream", "Pizza", "Olives","Hamburgers"];


function compare(arr1, arr2) {

    let res = [];
    arr1.forEach(element1 => {
        arr2.forEach(element2 => {
            if (element1 == element2) {
                res.push(element1);
            }
        });
    });

    if (res.length == 0) {
        return false;
    }

    return res;
}

console.log(compare(food, food1));


