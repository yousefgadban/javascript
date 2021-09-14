let book = {name : 'book', year : '2021'};

function swap(book){
    var ret = {};
    for(var key in book){
      ret[book[key]] = key;
    }
    return ret;
}


console.log(book);
let swapBook = swap(book)
console.log(swapBook);



