

require("fs").readFile('./callbacks.js', function(err, data) {
    if (err) throw err;
    console.log(data.toString());
});

setTimeout(function(){
    console.log("Apel callback din timeout de 100ms")
}, 100)


function callAsync(f, timeout){
    return function(){
        setTimeout(f, timeout);
    }
}


callAsync(function(){
    console.log("Apel callback din callAsync")
}, 1000);


