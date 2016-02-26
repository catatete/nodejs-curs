var why = require("whys");

function f(){
 throw new Error("Error");
}


function flow(){
    setTimeout(f.why("Call setTimeout 100"), 100);
}


flow.why("Start the flow ")();


process.on('uncaughtException', function (error) {
    console.log(error.stack);

});
