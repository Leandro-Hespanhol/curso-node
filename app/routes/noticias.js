module.exports = (application) => {
  application.get('/noticias', function (req, res) {
    // a variável irá receber o exportado no dbConnection

    var connection = application.config.dbConnection();
    var noticiasModel = application.app.models.noticiasModel;

    noticiasModel.getNoticias(connection, function (error, result) {
      res.render('noticias/noticias', { noticias: result });
    });
  });
};
