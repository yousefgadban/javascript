function filter(arr) {

    let res = [];
    for (let i = 0 ; i < arr.length ; i++) {
        if (filterMethod(arr[i])) {
            res.push(arr[i]);
        }
    }

    return res;
}

function filterMethod(element) {
    return (element > 5)
} 

//console.log(filter([1, 2, 5, 5, 4 , 3, 8, 7, 7, 5]));


function map(arr) {
    let res = [];
    for (let i = 0 ; i < arr.length ; i++) {
        res.push(mapMethod(arr[i]));
    }

    return res;
}

function mapMethod(element) {
    return (element * 2)
} 

// console.log(map([1, 2, 5, 5, 4 , 3, 8, 7, 7, 5]));


function foreach(arr) {

    for (let i = 0 ; i < arr.length ; i++) {
        foreachMethod(arr[i]);
    }

}

function foreachMethod(element) {
    console.log(element);
} 


//foreach([1, 2, 5, 5, 4 , 3, 8, 7, 7, 5]);