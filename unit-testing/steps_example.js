var test       = require('double-check').assert;

function asyncFunc(callback){
    console.log("Call...");
    setTimeout(callback, 100);
}

test.steps("Expect 3 steps test",
    [
        asyncFunc,
        function(nextStep) {
            asyncFunc(function () {
                //nextStep();
            })
        },
        asyncFunc
    ]);

