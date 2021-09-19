let array = [1, 2, 3, 4, 5]

function doubleValues(arr) {
    let res = [];
    arr.forEach(element => {
        res.push(element*2);
    });

    return res;
}

// console.log(doubleValues(array));

function onlyEvenValues(arr) {
    let res = [];
    arr.forEach(element => {
        if (element % 2 === 0) {
            res.push(element);
        }
    });

    return res;
}

// console.log(onlyEvenValues(array));

function showFirstAndLast(arr) {
    let res = [];
    arr.forEach((element, i) => {
        if (i === 0 || i === arr.length - 1) {
            if (typeof(element) === 'string') {
                res.push(element);
            }
            
        }
    });

    return res;
}

//console.log(showFirstAndLast(array));


function vowelCount(str) {
    let res = {};

    let strArr = str.split('');
    strArr.forEach((s) => {
       
        if ('aeuoy'.includes(s)) {
            if (res.hasOwnProperty(s) ) {
                res[s]++;
            } else {
                res[s] = 1;
            }
        }
        
    });

    return res;
}

//console.log(vowelCount('aebdffdjeeayyooo'));


function capitalize(str) {
    let res = '';
    let strArr = str.split('');
    strArr.forEach((s) => {

        res += s.toUpperCase();
        
    });

    return res;

}

// console.log(capitalize('aebdffdjeeayyooo'));

function shiftLetters(str) {

    let res = [];
    let strArr = str.split('');
    strArr.forEach((s) => {

        if (s == 'A' || s == 'a') {
            res .push('z')
        } else {
            let charcode = (s.charCodeAt() - 1) ;
            res.push(String.fromCharCode(charcode));
        }
        
    });

    return res;
}

// console.log(shiftLetters('aBcdefgh'));


function swapCase(str) {

    let res = [];
    let wordsArr = str.split(' ');
    wordsArr.forEach((word) => {

        res.push(capitalize(word));

        // let strArr = word.split('');
        // strArr.forEach((s) => {
            
        //     console.log(s);
    
        //     // if (s == 'A' || s == 'a') {
        //     //     res .push('z')
        //     // } else {
        //     //     let charcode = (s.charCodeAt() - 1) ;
        //     //     res.push(String.fromCharCode(charcode));
        //     // }
            
        // });
    
        
        
    });

    return res.toString().split(",").join(" ");;

}

console.log(swapCase('this is a string'));