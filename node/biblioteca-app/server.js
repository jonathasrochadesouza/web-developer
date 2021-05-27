const express = require('express');
const app = express();
const booksRouter = require('./route/booksRoute');

app.use(express.json());
app.use(booksRouter);
app.listen(3000);
