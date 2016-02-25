/* npm install express */
/* https://nodejs.org/api/http.html */

var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.get('/abcd/:abc', function (req, res) {
    res.send(req.headers );
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});