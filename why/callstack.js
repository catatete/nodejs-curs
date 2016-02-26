

function f(){
 throw new Error("Error");
}


function flow(){
    setTimeout(f, 100);
}


flow();

process.on('uncaughtException', function (error) {
    console.log(error.stack);
});
