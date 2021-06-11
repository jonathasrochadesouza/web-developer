//Parte incicial do servidor que irá importar as rotas necessárias
const express = require('express');
const booksRoute = require('./route/booksRoute');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());
app.use(booksRoute);
app.listen(3000);

