var flow = require("callflow");
var logger = require("double-check").logger;
logger.logWhy = function(){

}



var FS = require('fs'),

/*
Q.nfcall(FS.readFile, "./qpromise.js", "utf-8")
    .then(function(data) {
        //console.log('File has been read:', data);
        return "Result"
    }).then(function(data){
        console.log(data);
    })
    .fail(function(err) {
        console.error('Error received:', err);
    })
    .done();
*/


var f = flow.createFlow("Flow example", {
    begin:function(){
        FS.readFile("./callflow.js", this.continue("fileRead"));

    },
    fileRead:function(err, data){

        this.next()
    },
    doSomething:function(data){
        console.log(data);
    },
    error:function(err){
        console.error('Error received:', err);
    }
});
f();
