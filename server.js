const express = require('express');
const port = 8080;
var app = express();
app.use(express.static('public'))