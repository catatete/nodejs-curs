// readFileUsingPromises.js
var FS = require('fs'),
    Q = require('q');



Q.nfcall(FS.readFile, "./qpromise.js", "utf-8")
    .then(function(data) {
        //console.log('File has been read:', data);
        return "Result"
})
.then(function(data){
        console.log(data);
})
.fail(function(err) {
    console.error('Error received:', err);
})
.done();

