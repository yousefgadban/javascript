function isString(str, callback) {

    if (typeof(str) === 'string') {
        callback(str)
    } 
    else {
        callback('not a string');
    }

}

isString('1', (value)=> {
    console.log(value);
})


function firstWordUpperCase(str, callback) {
   let s = str[0].toUpperCase();
   s += str.slice(1);
   callback(s);
}

firstWordUpperCase('this is a string', (str)=> {
    let s = str.split(" ").join("-")
    console.log(s);
}) 

