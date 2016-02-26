var why = require("whys");



process.on('uncaughtException', function (error) {
    console.log(error.stack);

});

function f(){
    console.error("Throwing...");
    throw new Error("Error");
}


function flow(){
    setTimeout.why("Call setTimeout")(f.why("Call f in setTimeout 100"), 100);
}


flow.why("Start the flow ")();

setTimeout(function(){}, 1000);