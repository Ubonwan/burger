var express = require('express');
var exphbs = require('express-handlebars');
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.urlencoded ({ extended:true }));
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.set('port', (process.env.PORT || 3000));

app.engine('handlebars', exphbs({ defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

require('./controllers/burgers_controller.js')(app);

app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});
