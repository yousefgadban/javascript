let array = ["boo", "doooo", "hoo","ro"];

function lengthOfArrayStrings(arr) {

    newArr = [];
    arr.forEach(element => {
        newArr.push(element.length);
    });

    return newArr;
}

console.log(lengthOfArrayStrings(array));