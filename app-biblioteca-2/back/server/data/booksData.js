const database = require('../database/database');

exports.getBooks = function () {
    return database.query('select * from livro');
}

exports.getBook = function(bookId) {
    return database.query('select * from livro where idlivro = $1', [bookId]);
}

//Conexão com o banco onde é realisado uma exclusão do registro pelo id passado sem retorno de registros
exports.deleteBook = function(bookId){
    return database.none('delete from livro where idlivro = $1', [bookId]);
}

exports.saveBook = function(book) {
    return database.one('insert into public.livro (idlivro, nome, editora, isbn, quantidade, assunto, autor) values ($1, $2, $3, $4, $5, $6, $7) returning *', [book.idlivro, book.nome, book.editora, book.isbn, book.quantidade, book.assunto, book.autor]);
}

exports.getClientes = function () {
    return database.query('select * from cliente');
}

//Conexão com o banco onde seleciona apenas um registro da tabela segundo o id passado
exports.getCliente = function(codigo) {
    return database.query('select * from cliente where codigo = $1', [codigo]);
}

//Conexão com o banco onde é realisado uma exclusão do registro pelo id passado
exports.deleteCliente = function(codigo){
    return database.none('delete from cliente where codigo =', [codigo]);
}

exports.saveCliente = function(cliente) {

    return database.one('insert into cliente (nome, endereco, telefone) values ($1, $2, $3) returning *', [cliente.nome], [cliente.endereco], [cliente.telefone]);

// insert into public.livro (idlivro, nome, editora, isbn, quantidade, assunto, autor) values (4, 'A Menina e o Porquinho', 7, '978-3-16-148410-1', 21, 5, 13);
}

exports.getPedidos = function () {
    return database.query('select * from pedido');
}

//Conexão com o banco onde seleciona apenas um registro da tabela segundo o codigo passado
exports.getPedido = function(codigo) {
    return database.query('select * from pedido where codigo = $1', [codigo]);
}

//Conexão com o banco onde é realisado uma exclusão do registro pelo codigo passado
exports.deletePedido = function(codigo){
    return database.none('delete from pedido where codigo =', [codigo]);
}

//Conexão onde vai se pego um json o parâmetro (pedido) onde contém dados do pedido e é inserido 
exports.savePedido = function(pedido) {
    // Adcionar no primeiro parêntese adicona o nome das colunas do banco de dados, e os array é a sequencia que vai ser inserido no 
    //no corpo do body no postman
    return database.one('insert into pedido (codigoCliente, dataCompra, valorTotalCompra) values ($1, $2, $3) returning *', [pedido.codigoCliente], [cliente.dataCompra], [cliente.valorTotalCompra]);
}