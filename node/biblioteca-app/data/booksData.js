const database = require('../database/database');

exports.getBooks = function() {
    return database.query('select * from book');
}

exports.getBooks = function() {
    return database.query('select * from book where idBook = $1',[bookId])
}

exports.getBooks = function() {
    return database.none('delete from book where idBook = $1',[bookId])
}

exports.getBooks = function() {
    return database.one('insert into book (idBook, name, editor, isbn, quantidade, assunto, autor) values ($1, $2, $3, $4, $5, $6, $7) returning *', 
    [book.idLivro, book.nome, book.editor, book.isbn, book.quantidade, book.assunto, book.assunto, book.autor]);
}

