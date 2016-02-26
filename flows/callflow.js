var FS = require('fs');
var flow = require("callflow");
var logger = require("double-check").logger;
/*logger.logWhy = function(){

}*/


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


var f = flow.createFlow("Flow example 1", {
    begin:function(){
        FS.readFile("./callflow.js", this.continue("fileRead"));

    },
    fileRead:function(err, data){
        this.next("doSomething", "Call doSomething", data);
    },
    doSomething:function(data){
        //console.log(data.toString());
    },
    error:function(err){
        console.error('Error received:', err);
    }
});
f();



var fJoin = flow.createFlow("Flow example 2", {
    begin:function(){
        FS.readFile("./callflow.js", this.continue("fileRead"));

    },
    fileRead:function(err, data){
        this.next("doSomething", "Call doSomething", data);
        this.doSomething2(data);
    },
    doSomething: function(data){
        this.data = data;
    },
    doSomething2: function(){
        console.log("Did it!")
    },
    end:{
        join:"doSomething, doSomething2",
        code:function(){
            console.log(this.data.toString());
            console.log("Success!");
        }
    }
});

fJoin();