const pgp = require('pg-promise')();
const db = pgp({
    // user: 'postgres',
    // password: '921966gg@',
    // host: 'localhost',
    // port: '5432',
    // database: 'postgres' // name of database
});

module.exports = db;
