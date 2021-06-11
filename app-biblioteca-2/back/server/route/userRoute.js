/*
*/
const express = require('express');
const router = express.Router();
const { deleteUser } = require('../data/userData');
const userService = require('../service/userService');

/**
 * 
 */
router.get('/books', async function(req, res){
    const books = await booksService.getBooks();
    res.json(books);
});

/**
 * 
 */
router.get('/book/:id', async function (req, res){
    const book = await booksService.getBook(req.params.id);
    res.json(book);
});

/**
 * 
 */
router.delete('/book/:id', async function (req, res) {
    deleteBook(req.params.id);
    return res.json([{mesage: "registro excluído com sucesso"}]);
});

/**
 * 
 */
router.put('/book', async function (req, res) {
    const book = req.body;

    const newBook = await booksService.saveBook(book);
    res.json(newBook);
});

/*
 * 
 */
module.exports = router;