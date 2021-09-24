function fibonacci(n) {
    
    let n1 = 1;
    let n2 = 1;
    let n3 = n1 + n2;

    for (let i = 2 ; i < n ; i++) {
        n3 = n1 + n2;
        n1 = n2;
        n2 = n3; 
    }

    return n2;
}

//console.log(fibonacci(2));


function arraysEqual(a, b) {
    if (a === b) return true;
    if (a == null || b == null) return false;
    if (a.length !== b.length) return false;
  
    for (var i = 0; i < a.length; ++i) {
      if (a[i] !== b[i]) return false;
    }
    return true;
}


function tribonacci(arr, n) {

    let res = [];
    if (n == 0) {
        return res;
    }

    if (!arraysEqual(arr,[1,1,1]) && !arraysEqual(arr,[0,1,1]) && !arraysEqual(arr,[0,0,1])) {
        return res;
    }

    res = arr.slice();

    let n1 = arr[0]
    let n2 = arr[1]
    let n3 = arr[2]
    let n4 = 0;

    for (let i = 3 ; i < n ; i++) {
        n4 = n1 + n2 + n3;
        n1 = n2;
        n2 = n3;
        n3 = n4;
        res.push(n3)
    }

    return res;


}

console.log(tribonacci([1,1,1], 8));