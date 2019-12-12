const express = require('express');
const port = 8080;
var app = express();
app.use(express.static('public'));
var exphbs  = require('express-handlebars');

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars"); 

app.listen(port, function(){
    console.log('port 8080 is working')
})

