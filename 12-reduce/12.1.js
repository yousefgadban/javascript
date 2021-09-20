let array = [1, 2, 3, 4, 5];

function max(arr) {

    return arr.reduce( (pre, curr) => {
        return pre > curr ? pre : curr;
    }, 0)

}

// console.log(max(array));


function even(arr) {

    return arr.reduce( (pre, curr) => {
        return (curr % 2 == 0) ? curr + pre : pre;
    }, 0);

}

// console.log(even(array));

function sum(arr) {

    return arr.reduce( (pre, curr) => {
        return curr + pre;
    }, 0)/arr.length;

}

console.log(sum(array));