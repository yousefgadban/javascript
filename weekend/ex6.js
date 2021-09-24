
// 6.1 
function accum(str) {

    let s = '';
    str.split('').forEach((l,i) => {
        s += i == str.length - 1 ? l.toUpperCase() + l.repeat(i) : l.toUpperCase() + l.repeat(i) + '-';
    });

    return s
}

// console.log(accum('RqaEzty'));


//6.2
function countingDuplicates(str) {

    let res = {};
    let duplicate = 0

    let strArr = str.split('');
    strArr.forEach((s) => {
       
        let ls = s.toLowerCase();
        if ('abcdefghijklmnopqrstuvwxyz0123456789'.includes(ls)) {
            if ( res.hasOwnProperty(ls) ) {
                res[ls]++;
            } else {
                res[ls] = 1;
            }
        }
        
    });

    for (prop in res) {
        if (res[prop] > 1) {
            duplicate++
        }
    }

    //console.log(res);
    return duplicate

}

// console.log(countingDuplicates('ABBA'));


// 6.3
function longest(str1, str2) {

    if (str1 === str2) {
        return str1;
    }

    let res = {};
    let s = '';

    'abcdefghijklmnopqrstuvwxyz'.split('').forEach((s) => {
       
        let ls = s.toLowerCase();
        if ('abcdefghijklmnopqrstuvwxyz'.includes(ls)) {
            res[ls] = 0;
        }
        
    });

    let strArr1 = str1.split('');
    strArr1.forEach((s) => {
       
        let ls = s.toLowerCase();
        if ('abcdefghijklmnopqrstuvwxyz'.includes(ls)) {
            res[ls]++;
        }
        
    });

    let strArr2 = str2.split('');
    strArr2.forEach((s) => {
       
        let ls = s.toLowerCase();
        if ('abcdefghijklmnopqrstuvwxyz'.includes(ls)) {
            res[ls]++;
        }
        
    });

    for (prop in res) {
        if (res[prop] > 0) {
            s += prop
        }
    }

    // console.log(res);
    return s

}

// console.log(longest('xyaabbbccccdefww', 'xxxxyyyyabklmopq'));


// 6.4
function isogram(str) {
    return countingDuplicates(str) == 0 ;
}

console.log(isogram('abcdb'));