var express = require('express');
var app = express();
var exphbs = require("express-handlebars");

app.set('views', './src/server/views/layouts');

app.engine('hbs', exphbs({
  defaultLayout: 'main.hbs',
  layoutsDir:"src/server/views"
  }));
app.set('view engine', 'hbs');

app.use(express.static('public'));

app.get('/', function (req, res) {
  var templateProps = {}
  res.render('index', templateProps);
});

app.listen(3000, function () {
  console.log('App listening on port 3000!');
});
