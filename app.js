var app = require('./config/server');

//isso tudo substituido pelo ""consign().include('app/routes').into(app);"" no server.js
/*var rotaNoticias = require('./app/routes/noticias');
rotaNoticias(app);

var rotaHome = require('./app/routes/home');
rotaHome(app);

var rotaFormNoti = require('./app/routes/formulario_inclusao_noticia');
rotaFormNoti(app); */

app.listen(3000, function () {
  console.log('Servidor Online');
});
