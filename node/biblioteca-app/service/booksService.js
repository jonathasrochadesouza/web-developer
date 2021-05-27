const booksData = require('../data/booksData');

exports.getBooks = function() {
    return booksData.getBooks();
}

exports.getBook = function (bookId) {
    return booksData.getBook(bookId)
}

exports.deleteBook = function (bookID) {
    return booksData.deleteBook(bookID);
}

exports.saveBook = function (book) {
    return booksData.saveBook(book);
}
