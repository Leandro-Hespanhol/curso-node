module.exports = (app) => {
  // a prox variávio irá receber o exportado no dbConnection
  app.get('/noticia', function (req, res) {
    var connection = app.config.dbConnection();
    var noticiasModel = app.app.models.noticiasModel;

    noticiasModel.getNoticia(connection, function (error, result) {
      res.render('noticias/noticia', { noticia: result });
    });
  });
};
