var express = require("express");
var app = express();
var path = require('path');
var port = 5000;
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));




//catch all bucket
app.get("/*", function(req, res) {
  console.log('got a request for a file: ', req.params[0]);
  var file = req.params[0] || "/views/index.html";
  res.sendFile(path.join(__dirname, "/public/", file));
});

app.listen(port, function() {
  console.log('listening on the port', port);
});






































//this works:
// var express = require("express");
// var app = express();
// var path = require('path');
// var port = 5000;
// var bodyParser = require("body-parser");
// app.use(bodyParser.urlencoded({extended: true}));
//
//
// app.post('/maxNumberRange', function(req, res){
//   var value = req.body;
//   console.log(value);
//   // pizzas.push(newPizza);
//   // res.sendStatus(200);
// });
//
// app.get("/*", function(req, res) {
//   console.log('got a request for a file: ', req.params[0]);
//   var file = req.params[0] || "/views/index.html";
//   res.sendFile(path.join(__dirname, "/public/", file));
// });
//
// app.listen(port, function() {
//   console.log('listening on the port', port);
// });
