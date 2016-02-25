
function printAsync(timeout, value){
    var str = "Message!";
     function(){
        setTimeout(function(){
            console.log(str);
        }, timeout);
    }
}


var pa1 = printAsync(100, "Hello closures 1");
pa1();

var pa2 = printAsync(100, "Hello closures 2");
pa2();