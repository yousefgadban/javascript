let array = [5,5,8,7,-1,5];

function avgJumper(arr) {

    let newArr = [];
    let count = 0;
    let avg = 0;
    let divide = 3;

    for(let i = 0 ; i < arr.length ; ) {
        if (count < 3) {

            if (arr[i] != -1) {
                avg += arr[i];
            } else {
                divide--;
            }
            
            count++;
            i++;
        } else {
            newArr.push(avg/divide)
            count = 0;
            avg = 0;
            divide = 3;
        }
    }

    newArr.push(avg/divide);
    return newArr;

}


function bestAvgJump(arr) {
    return max = Math.max.apply(null, avgJumper(arr));
}

function bestJump(arr) {
    return max = Math.max.apply(null, arr);
}

console.log(avgJumper(array));

console.log('bestAvgJump => ' + bestAvgJump(array));
console.log('bestJump => ' + bestJump(array));