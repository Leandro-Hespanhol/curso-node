function Noticias() {}

Noticias.prototype.getNoticias = function (connection, callback) {
  connection.query('select * from noticias', callback);
};

Noticias.prototype;

Noticias.prototype;

module.exports = function () {
  this.getNoticias = this.getNoticia = function (connection, callback) {
    connection.query('select * from noticias where id_noticia = 2', callback);
  };
  this.salvarNoticia = function (noticia, connection, callback) {
    connection.query('insert into noticias set ? ', noticia, callback);
  };
  return this;
};
