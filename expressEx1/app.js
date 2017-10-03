var express = require("express");
var bodyParser = require("body-parser");

var app = express();

app.use(bodyParser.urlencoded({ extended: false }));


app.use("/api/calculator/:operation/:n1/:n2", function (req, res, next) {
    let result;
    var calculatorRequest = {
        operation: req.params.operation,
        n1: Number(req.params.n1),
        n2: Number(req.params.n2)
    }
    req.calcReq = calculatorRequest;
    switch (calculatorRequest.operation) {
        case 'add': {
            result = calculatorRequest.n1 + calculatorRequest.n2;
            break;
        }
        case 'subtract': {
            result = calculatorRequest.n1 - calculatorRequest.n2;
            break;
        }
        case 'multiply': {
            result = calculatorRequest.n1 * calculatorRequest.n2;
            break;
        }
        case 'divide': {
            result = calculatorRequest.n1 / calculatorRequest.n2;
            break;
        }
    }
    req.calc = result;
    next();
})

app.get("/api/calculator/*", function (req, res) {
    var opr = '';
    switch (req.calcReq.operation) {
        case 'add': opr = '+'; break;
        case 'subtract': opr = '-'; break;
        case 'multiply': opr = '*'; break;
        case 'divide': opr = '/'; break;
        default: break;
    }
    res.send(`The result of ${req.calcReq.n1} ${opr} ${req.calcReq.n2} is: ${req.calc}`);
})

app.listen(3000, function () {
    console.log("Server started, listening on: " + 3000);
})