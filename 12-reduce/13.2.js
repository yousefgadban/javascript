let array = ["boo", "doooo", "hoo","ro"] ;

function length(arr) {

    let i = 0 ;
    let l = [];
    while (i < arr.length) {
        l.push(arr[i].length);
        i++;
    }

    return l;
}

console.log(length(array));