const candyStore = {
    candies: [
        { 
            name: "mint gum",
            id: "as12f",
            price: 2,
            amount: 2
        },
        {
            name: "twix",
            id: "5hd7y",
            price: 5,
            amount: 4
        },
    ],
    cashRegister: 200
}

// function getCandy(candyStore, id){

//     let candiesArr = candyStore.candies;
    
//     for (let i = 0 ; i < candiesArr.length ; i++) {
//         if (candiesArr[i].id == id) {
//             return candiesArr[i];
//         }
//     }

//     return 'no such candy';
// }

function getCandy(candyStore, id){

    let result;
    let candiesArr = candyStore.candies;
    candiesArr.forEach(element => {

        if (element.id == id) {
            //console.log(element);
            result = element;
        }
        
    });

    return result;
}

function getPrice(candyStore, id){
    
    let candiesArr = candyStore.candies;
    
    for (let i = 0 ; i < candiesArr.length ; i++) {
        if (candiesArr[i].id == id) {
            return candiesArr[i].price;
        }
    }

    return 'no such candy';

} 

function addCandy(candyStore, id, name, price){
    
    let newCandy = {
        name: name,
        id: id,
        price: price,
        amount: 1
    }
    candyStore.candies.push(newCandy);

}

function buy(candyStore, id){
    
    let candiesArr = candyStore.candies;
    
    for (let i = 0 ; i < candiesArr.length ; i++) {
        if (candiesArr[i].id == id) {
            candiesArr[i].amount--;
            candyStore.cashRegister += candiesArr[i].price;
        }
    }

}

 //console.log(getCandy(candyStore, 'as12f'));

//console.log(getPrice(candyStore, '5hd7y'));

//addCandy(candyStore, '1111', 'newCandy', 20);

// buy(candyStore, '5hd7y')

// console.log(candyStore);



// function findOutlier(integers){
  
//     let m = 0; 
//     if (Math.abs(integers[0]) % 2 == Math.abs(integers[1] % 2)) {
//         if (Math.abs(integers[0]) % 2 == Math.abs(integers[2] % 2)) {
//             m = Math.abs(integers[0] % 2);
//             console.log('m1 ' + m);
//         } else {
//             m = Math.abs(integers[0] % 2);
//             console.log('m2 ' + m);
//         }
//     } else {
//       if (Math.abs(integers[0] % 2) == Math.abs(integers[2] % 2)) {
//            m = Math.abs(integers[0] % 2);
//            console.log('m3 ' + m);
//       } else {
//            m = Math.abs(integers[2] % 2);
//            console.log('m4 ' + m);
//       }
//     }

//     //console.log('m ' + m);
    
//     for (let i = 0 ; i < integers.length ; i++) {
  
//       if (m != Math.abs(integers[i] % 2)) {
//         return integers[i];
//       }
      
//     }
    
// }

//console.log('findOutlier ' + findOutlier([-10031649,60242855,-4942019,-181575882,30971815,101677743,35503703]));

// function iqTest(numbers){
//     numbers = numbers.split(" ").map(function(el){return parseInt(el)});
    
//     var odd = numbers.filter(function(el){ return el % 2 === 1});
//     var even = numbers.filter(function(el){ return el % 2 === 0});

//     console.log('odd ' + odd);
//     console.log('even ' + even);
    
//     return odd.length < even.length ? (numbers.indexOf(odd[0]) + 1) : (numbers.indexOf(even[0]) + 1);
// }

// console.log('iqTest ' + iqTest('0 2 4 6 10 11'));


// function spinWords(string){

//     str = string; //.toLowerCase();
    
//     let array = str.split(' ')
//     .map(function(el) {
//         if (el.length > 4) {
//             return el.split("").reverse().join("");
//         } else {
//             return el;
//         }
        
//     });

//     let reversed = (''+array).split(",").join(" ");

//     return reversed;
// }

// console.log('spinWords ' + spinWords("Hey fellow warriors"));



// function isPangram(string){
    
//     let obj = {a: 0, b: 0, c: 0, d: 0, e: 0, f: 0, g: 0, h: 0, i: 0, j: 0, k: 0, l: 0, m: 0, n: 0, o: 0, p: 0, q: 0, r: 0, 
//         s: 0, t: 0, u: 0, v: 0, w: 0, x: 0, y: 0, z: 0 };

//     let result = {};

//     let word = string.toLowerCase();
//     for (let j = 0 ; j < word.length ; j++) {
//         if (word[j] != ' ') {
//              obj[word[j]] = 1;
//         }
//     }

//     var keys = Object.keys(obj);

//     for (let i = 0 ; i < keys.length ; i++) {
//         if (obj[keys[i]] == 0) {
//             return false;
//         }
//     }

//     return true;

// }

// console.log(isPangram('The quick brown fox jumps over the lazy dog.'));


// function findOdd(A) {

//     const counts = {};

//     for (let i = 0 ; i < A.length ; i++) {
//         let num = A[i];
//         counts[num] = counts[num] ? counts[num] + 1 : 1;
//     }

//     var keys = Object.keys(counts);

//     for (let i = 0 ; i < keys.length ; i++) {
//         if (counts[keys[i]] % 2 == 1) {
//             return keys[i];
//         }
//     }
// }

// console.log(findOdd([5,4,3,2,1,5,4,3,2,10,10]));


// function binaryArrayToNumber(arr) {

    

//     let array = arr.reverse();
//     let num = 0;

//     for (let i = 0 ; i < array.length ; i++) {
//         if (array[i] == 1) {
//             num += Math.pow(2,i);
//         }
//     }

//     return num;
// }

// console.log(binaryArrayToNumber([0,1,0,1]));

// function isPrime(num) {

//     let n = Math.abs(num);
//     for(let i = 2, s = Math.sqrt(n); i <= s; i++)
//         if(n % i === 0) return false; 
//     return n > 1;

// }

// console.log(isPrime(5));


// function longestConsec(strarr, k) {
//     let n = strarr.length;

//     let max = 0;
//     let maxStr = '';

//     if (n == 0 || k > n || k<=0) {
//         return "";
//     }

//     for (let i = 0 ; i < strarr.length - (k-1) ; i++) {
//         let check = '';
//         for (let j = i ; j < i+k ; j++) {
//             check += strarr[j];
//         } 
        
//         console.log(check);
//         if (check.length > max) {
//             max = check.length;
//             maxStr = check;
//         }
//     }

//     return maxStr;
// }

//console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2));

// function towerBuilder(nFloors) {

//     //let arr = Array.from({length: 5}, (v, i) => '*'.repeat(i+1));

//     let nF = nFloors*2-1; 

//     let arr = [];
    
//     for (let i = 1 ; i <= nF ; i += 2) {
//         // console.log('i ' + i);
//         let str = '';
//         for (let j = 0 ; j < (nF-i)/2 ; j++) {
//             str += ' ';
//         }
//         for (let j = 0 ; j < i ; j++) {
//             str += '*';
//         }
//         for (let j = 0 ; j < (nF-i)/2 ; j++) {
//             str += ' ';
//         }
//         arr.push(str);
//     }

//     return arr;
    
// }

// function towerBuilder(n) {
//     return Array.from({length: n}, function(v, k) {
//         console.log('k ' + k);
//       const spaces = ' '.repeat(n - k - 1);
//       return spaces + '*'.repeat(k + k + 1) + spaces;
//     });
//   }

// console.log(towerBuilder(2));


// function solution(str){

//     let sol = [];
//     for (let i = 0 ; i < str.length - 1 ; i += 2) {
//         sol.push(str[i]+str[i+1])
//     }

//     if (str.length%2==1) {
//         sol.push(str[str.length - 1] + '_')
//     }

//     return sol;
   
// }

//console.log(solution('abcde'));

// function rot13(message){
  
//     const input = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
//      const output = 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm';
//      let encoded = '';
//      for (let i=0; i < message.length; i++) {
//          const index = input.indexOf(message[i]);
//          if (index > -1) {
//            encoded += output[index];  
//          } else {
//            encoded += message[i];
//          }
         
//      }
 
//      return encoded;
   
//  }

//  console.log(rot13('Test'));


//  function alphabetPosition(string) {

//     let str = string.toLowerCase();

//     let res = '';

//     for (let i=0; i < str.length - 1 ; i++) {

//         let ind = 'abcdefghijklmnopqrstuvwxyz'.indexOf(str[i]);
//         if (ind > -1) {
//             res += (ind + 1) + ' ';
//         }
        
//     }

//     ind = 'abcdefghijklmnopqrstuvwxyz'.indexOf(str[str.length - 1]);
//     if (ind > -1) {
//         res += ind + 1;
//     } else {
//         res = res.substring(0, res.length -1);
//     }

//     return res;

//     // let arr = Array.from({length: 26}, (v, i) => 'abcdefghijklmnopqrstuvwxyz'[i]);

//     // console.log(arr);

//  }


//  console.log(alphabetPosition("The sunset sets at twelve o' clock."));



// function order(str) {

//     if (str == '') {
//         return '';
//     }

//     let arr = str.split(' ');

//     let numbers = Array.from({length: arr.length}, (v, i) => (i+1));

//     for (let i=0; i < arr.length ; i++) {
        
//         for (let j=1; j <= numbers.length ; j++) {
//             if (arr[i].includes(''+j)) {
//                 numbers[j-1] = arr[i];
//             }
//         }
//     }

//     return (''+numbers).split(",").join(" ");

// }

//console.log(order('is2 Thi1s T4est 3a'));

// function zeros(n) {

//     res = 1;
//     let r = 0


//     for (let i=1; i <= n ; i++) {
//         //res *= i;
//         res = toFixed(res*i);
//         console.log(''+res);
//     }

//     //res = toFixed(res)

//     console.log(''+res);

//     for (let j=1; j <= 7 ; j++) {
//         let s = '0'.repeat(j);
//         if ((''+res).includes(s)) {
//             r = j;
//         } else {
//             break;
//         }
//     }

//     return r;
// } 



// console.log(zeros(30));


// function domainName(url){

//     dot1 = url.indexOf('//');
//     dot2 = url.indexOf('www.');
//     dot3 = url.indexOf('.');

//     domain = '';

//     //console.log(dot1 + ' ' + dot2 + ' ' + dot3);

//     if (dot1 != -1) {
//         if (dot2 == -1) {
//             for (let i = dot1+2 ; i < dot3 ; i++) {
//                 domain += url[i];
//             }
//         } else {
//             let i = dot2+4
//             while (url[i] != '.') {
//                 domain += url[i];
//                 i++;
//             }
//         }
//     } else {
//         if (dot2 == -1) {
//             let i = 0;
//             while (url[i] != '.') {
//                 domain += url[i];
//                 i++;
//             }
//         } else {
//             let i = dot2+4
//             while (url[i] != '.') {
//                 domain += url[i];
//                 i++;
//             }
//         }
        
//     }



//     return domain;
// }

// console.log(domainName("www.xakep.ru"));



// function snail(arr) {

//     let res = [];
//     let l = arr.length;
//     //console.log('l ' + l + ' ' + arr[0][0]);

//     if (typeof arr[0][0] === 'undefined' ) {
//         return [];
//     }

//     if (l == 1) {
//         res.push(arr[0][0]);
//         return res;
//     }

//     if (l == 2) {
//         res.push(arr[0][0]);
//         res.push(arr[0][1]);
//         res.push(arr[1][1]);
//         res.push(arr[1][0]);

//         return res;
//     }
    

//     for (let m = l ; m > 0 ; m = m - 2) {

//         l = m;
//         console.log('l ' + l);
//         console.log(res);

//         if (l == 0) {
//             return res;
//         }
    
//         if (l == 1) {
//             res.push(arr[0][0]);
//             return res;
//         }
    
//         if (l == 2) {
//             res.push(arr[0][0]);
//             res.push(arr[0][1]);
//             res.push(arr[1][1]);
//             res.push(arr[1][0]);
    
//             return res;
//         }

//         for (let i = 0 ; i <= l ; i++) {

//             if (i == 0) {
//                 for (let j = 0 ; j < l ; j++) {
//                     res.push(arr[0][j]);
//                 }
//             }
    
//             if (i == 1) {
//                 for (let j = 1 ; j < l ; j++) {
//                     res.push(arr[j][l-1]);
//                 }
//             }
    
//             if (i == 2) {
//                 for (let j = l-2 ; j >= 0 ; j--) {
//                     res.push(arr[l-1][j]);
//                 }
//             }
    
//             if (i == 3) {
//                 for (let j = l-2 ; j >= 1 ; j--) {
//                     res.push(arr[j][0]);
//                 }
//             }
            
//         }
    
    
//         res1 = [];
    
//         for (let i = 1 ; i < l-1 ; i++) {
//             let res2 = []
//             for (let j = 1 ; j < l-1 ; j++) {
//                 res2.push(arr[i][j]);
//             }
//             res1.push(res2);
//         }

//         arr = res1;

//     }
    
//     return res;

// }


//console.log(snail([[1,2,3,1],[4,5,6,4],[7,8,9,7],[7,8,9,7]]));

//console.log(snail([[1,2,3],[4,5,6],[7,8,9]]));

//console.log(snail([[1]]));

//console.log(snail([[]]));




 // for (let m = l-2 ; m > 0 ; m--) {

    //     l = l - 2;

    //     if (m == 1) {
    //         res.push(arr[0][0]);
    //         return res;
    //     }
    
    //     if (l == 2) {
    //         res.push(arr[0][0]);
    //         res.push(arr[0][1]);
    //         res.push(arr[1][1]);
    //         res.push(arr[1][0]);
    
    //         return res;
    //     }

    // }




// function isAlphaNumeric(str) {
//     var code, i, len;
    
//     for (i = 0, len = str.length; i < len; i++) {
//         code = str.charCodeAt(i);
//         if (!(code > 47 && code < 58) && // numeric (0-9)
//             !(code > 64 && code < 91) && // upper alpha (A-Z)
//             !(code > 96 && code < 123)) { // lower alpha (a-z)
//         return false;
//         }
//     }
//     return true;
// }

// function validate(password) {

//     let lowerCase = false;
//     let upperCase = false;
//     let number = false;

//     let lowerLetters = 'abcdefghijklmnopqrstuvwxyz';
//     let upperLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
//     let numbers = '0123456789';

//     if (!isAlphaNumeric(password)) {
//         return false;
//     }

//     if (password.length < 6) {
//         return false;
//     }

//     for (let i = 0; i < password.length ; i++) {

//         if (lowerLetters.includes(password[i])) {
//             lowerCase = true;
//         }

//         if (upperLetters.includes(password[i])) {
//             upperCase = true;
//         }

//         if (numbers.includes(password[i])) {
//             number = password;
//         }

//     }

//     if (upperCase && lowerCase && number) {
//         return true;
//     }

//     return false;

// }

// console.log(isValid('Password123'));


// function anagrams(word, words) {

//     let anagrams = [];

//     let w = word.split("").sort().join("");

//     for (let i = 0 ; i < words.length ; i++) {

//         if (word.length == words[i].length) {

//             let w1 = words[i].split("").sort().join("");

//             if (w === w1) {
//                 anagrams.push(words[i]);
//             }

//         }
//     }

//     return anagrams;

// }

//console.log(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']));


function toFixed(x) {
    if (Math.abs(x) < 1.0) {
      var e = parseInt(x.toString().split('e-')[1]);
      if (e) {
          x *= Math.pow(10,e-1);
          x = '0.' + (new Array(e)).join('0') + x.toString().substring(2);
      }
    } else {
      var e = parseInt(x.toString().split('+')[1]);
      if (e > 20) {
          e -= 20;
          x /= Math.pow(10,e);
          x += (new Array(e+1)).join('0');
      }
    }
    return x;
}


function add(a, b) {

    let l1 = a.length;
    let l2 = b.length;

    let l3 = Math.abs(l1 - l2);

    let longer = 0;

    if (l1 > l2) {
        b = '0'.repeat(l3) + b;
    } else {
        a = '0'.repeat(l3) + a;
    }

    let res = '';
    let h = 0;

    for (let i = a.length - 1 ; i >= 0 ; i--) {

        let c = +a[i] + +b[i] + h;

        if (c.length < 10) {
            res += c;
            h = 0;
        } else {
            res = c%10 + res;
            h = parseInt(c/10);
        }

         console.log(res);

    }

    if (h > 0) {
        res = h + res;
    }

    return res;
}


console.log(add('888', '222'));


// 321352