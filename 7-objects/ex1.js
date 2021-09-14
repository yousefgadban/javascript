let book = {name : 'name', author: 'author', publishYear: 'year', pagesNumber: '200'}

function bookDescription(book) {
    return `The book ${book.name} was written by ${book.author} in the year ${book.publishYear}`
}

console.log(bookDescription(book));