var express = require('express');
var bodyParser = require('body-parser');
var mainController = require('./controller/mainController');

var app = express();
var urlencodedParser = bodyParser.urlencoded({ extended: false })
app.set('view engine', 'ejs');
app.use('/assets', express.static(__dirname+'/public'));


// controller
mainController(app, urlencodedParser);



app.listen(process.env.port || 3000, ()=>{
  console.log('listen to port 3000');
});
