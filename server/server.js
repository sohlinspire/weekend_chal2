var express = require("express");
var app = express();
var path = require('path');
var port = 5000;
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({
  extended: true
}));
var operation;
var valueX;
var valueY;
//button variable caluculation
function findValue() {
  if (operation === "addition") {
    return parseFloat(valueX) + parseFloat(valueY);
  } else if (operation === "subtraction") {
    return valueX - valueY;
  } else if (operation === "division") {
    return valueX / valueY;
  } else {
    return valueX * valueY;
  }
}
//request and response variable assignment/variable caluculation
app.post('/setOperation', function(req, res) {
  operation = req.body.type;
  valueX = req.body.valueX;
  valueY = req.body.valueY;
  //console.log("recieved type", operation, valueX, valueY);
  res.send(findValue().toString());
});

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
