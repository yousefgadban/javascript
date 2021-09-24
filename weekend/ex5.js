// 5.1
function trimming(str) {
    
    // let arr = str.split('')
    // arr.pop()
    // arr.shift()
    // return arr.join('')

    return str.slice(0,-1).slice(1);
}

//console.log(trimming('yousef'));

// 5.2
function  repeat_str(n, str) {

    let s = '';
    for (let i = 0 ; i < n ; i++) {
        s += str
    }
    return s;
}

// console.log(repeat_str(5,'str'));

// 5.3
function toCamelCase(str) {

    let d = str.includes('-') ? '-' : '_';
    
    let res = [];
    let arr = str.split(d)
    res.push(arr[0]);

    arr.forEach((word, i) => {
        if (i != 0) {
            let s = word[0].toUpperCase();
            res.push(s + word.slice(1));
        }
    });

    return res.join('')

}

// console.log(toCamelCase("The_stealth_warrior"));

// 5.4
function toWeirdCase(str) {
    let s = '';
    for (let i = 0 ; i < str.length ; i++) {
        if (i%2 == 0 ) {
            s += str[i].toUpperCase();
        } else {
            s += str[i].toLowerCase();
        }
    }
    return s;
}

//console.log(toWeirdCase('Weird string case'));

// 5.5
function initials(str) {
    let arr = str.split(' ');
    // return arr[0][0].toUpperCase() + '.' + arr[1][0].toUpperCase();

    return arr.map((word) => {
        return word[0].toUpperCase();
    })
    .join('.');

}

// console.log(initials('yousef gadbaan'));

// 5.6
function maskify(str) {

    if (str.length < 5) {
        return str;
    }

    return '#'.repeat(str.length - 4) + str.slice(str.length - 4);
    
}

// console.log(maskify('Skippy'));

// 5.7
function shortestWord(str) {

    return str.split(' ').map((word) => {
        return word.length > 0 ? word.length : 1;  // space is string
    })
    .reduce((a,b) => {
        return Math.min(a,b)
    })
}

// console.log(shortestWord('sad dasdfsdss dss as sadfddsf ssssa'));


// 5.8
function longestWord(str) {

    let wordsArr = str.split(' ').map((word) => {
        return word
    })

    let max = str.split(' ').map((word) => {
        return word.length > 0 ? word.length : 1;
    }).reduce((a,b) => {
        return Math.max(a,b)
    });

    return wordsArr.filter((word) => {
        return word.length == max
    })

}

console.log(longestWord('1 22 333 4444 22 3333 222 1111 3 44 55'));

