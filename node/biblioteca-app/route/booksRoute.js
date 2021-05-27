const express = require('express');
const router = express.Router();
const booksService = require('../service/booksService')

// return all boks
router.get('/books', async function(req, res) {
    const books = await booksService.getBooks();
    res.json(books);
});

// return a book required
router.get('/books/:id', async function (req, res) {
    const book = await booksService.getBook(req.params.id);
    res.json(book);
});

router.delete('/book/:id', function (req, res) {
    return res.json({message: 'deletado'});
});

router.put('/book', async function(req, res) {
    const book = req.body;
    const newBook = await booksService.saveBook(book);
    res.json(newBook);
});

module.exports = router;
