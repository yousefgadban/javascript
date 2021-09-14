const array = ["Hello", "Good Day", "Your Welcome", "hotdog", "hamburgers"];

let obj = {a: 0, b: 0, c: 0, d: 0, e: 0, f: 0, g: 0, h: 0, i: 0, j: 0, k: 0, l: 0, m: 0, n: 0, o: 0, p: 0, q: 0, r: 0, 
    s: 0, t: 0, u: 0, v: 0, w: 0, x: 0, y: 0, z: 0 }


let result = {};
let max = 0;
let maxLetter = '';

for (let i = 0 ; i < array.length ; i++) {

    let word = array[i].toLowerCase();
    for (let j = 0 ; j < word.length ; j++) {
        if (word[j] != ' ') {
            // obj[word[j]]++;
            
            if (result.hasOwnProperty(word[j]) ) {
                result[word[j]]++;
                if (result[word[j]] > max) {
                    max = result[word[j]];
                    maxLetter = word[j];
                }
            } else {
                result[word[j]] = 1;
            }
        }
    }
}

console.log(result);
console.log('maxLetter ' + maxLetter);


// another solution

let result2 = {};

var keys = Object.keys(obj);

for (let i = 0 ; i < keys.length ; i++) {
    if (obj[keys[i]] != 0) {
        result2[keys[i]] = obj[keys[i]];
    }
}

// console.log(result2);

