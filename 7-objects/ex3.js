let book1 = {name : 'name1', author: 'author1', year: '2020'};
let book2 = {name : 'name2', author: 'author2', year: '2021'};

let bookUtils = {
    getFirstPublished: function(book1, book2) {
        if (+book1.year <= +book2.year) {
            return book1;
        } else {
            return book2;
        }
    },

    setNewEdition: function(book, editionYear) {
        book.latestEdition = editionYear;
    },

    setLanguage: function(book, lang) {
        book.language = lang;
    },

    setTranslation: function(book, lang, translator) {
        book.translation = {translator : translator, language: lang};
    },

    setPublisher: function(book, name, location) {
        book.publisher = {name: name, location: location}
    },

    isSamePublisher: function(book1, book2) {
        if (book1.publisher.name == book2.publisher.name && book1.publisher.location == book2.publisher.location) {
            return true;
        } else {
            return false;
        }
    }
}



//console.log(bookUtils.getFirstPublished(book1, book2).name);

// bookUtils.setNewEdition(book1, '2023');

// bookUtils.setTranslation(book1, 'he', 'trans');

// bookUtils.setPublisher(book1, 'name', 'location');
// bookUtils.setPublisher(book2, 'name', 'location2');

// bookUtils.isSamePublisher(book1, book2);

// console.log(bookUtils.isSamePublisher(book1, book2));

// console.log(book1);