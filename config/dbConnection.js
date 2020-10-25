var mysql = require('mysql');

var connmysql = function () {
  return mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'dado20',
    database: 'portal_noticias',
  });
};
module.exports = function () {
  console.log('o autoload carregou o código de conexão com o bd');
  return connmysql;
};
