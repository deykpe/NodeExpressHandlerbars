const express = require('express');

const port = process.env.PORT || 8080;

var app = express();
app.use(express.static('public'));
var exphbs  = require('express-handlebars');

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars"); 

app.use(express.urlencoded({ extended: true }));
app.use(express.json()); 

var routes = require('./controllers/burgers_controller')
app.use(routes)

app.listen(port, function(){
    console.log('port 8080 is working')
});




