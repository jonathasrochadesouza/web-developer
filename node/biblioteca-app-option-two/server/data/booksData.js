//Este arquivo é onde se encontra a interação com o banco de dados, criando uma variável database
//basta retornar o databe.(invorcar o métod que deseja), nesta situação foi utilizado o 'query' e 'none'

const database = require('../database/database');

//Conexão com o banco onde vai buscar toda informação da tabela
exports.getBooks = function () {
    return database.query('select * from livro');
}

//Conexão com o banco onde seleciona apenas um registro da tabela segundo o id passado
exports.getBook = function(bookId) {
    return database.query('select * from livro where idlivro = $1', [bookId]);
}

//Conexão com o banco onde é realisado uma exclusão do registro pelo id passado sem retorno de registros
exports.deleteBook = function(bookId){
    return database.none('delete from livro where idlivro =', [bookId]);
}

//Conexão onde vai se pego um json o parâmetro (book) onde contém dados do livro e é inserido e retorna o objeto criado
exports.saveBook = function(book) {
    // Adcionar no primeiro parêntese adicona o nome das colunas do banco de dados, e os array é a sequencia que vai ser inserido no 
    //no corpo do body no postman
    return database.one('insert into livro (nome, editora, isbn, quantidade, assunto, autor) values ($1, $2, $3, $4, $5, $6) returning *', [book.nome], [book.editora], [book.isbn], [book.quantidade], [book.assunto], [book.autor])
}


/////////////////////////////////////////  Cliente ///////////////////////////////////////////////////


//Conexão com o banco onde vai buscar toda informação da tabela
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

//Conexão onde vai se pego um json o parâmetro (book) onde contém dados do livro e é inserido 
exports.saveCliente = function(cliente) {
    // Adcionar no primeiro parêntese adicona o nome das colunas do banco de dados, e os array é a sequencia que vai ser inserido no 
    //no corpo do body no postman
    return database.one('insert into cliente (nome, endereco, telefone) values ($1, $2, $3) returning *', [cliente.nome], [cliente.endereco], [cliente.telefone]);
}

/////////////////////////////////////////////////   Pedidos //////////////////////////////////////////////////////

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