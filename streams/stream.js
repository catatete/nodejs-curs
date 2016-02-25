/* https://nodejs.org/api/stream.html */
const fs = require('fs');
var rr = fs.createReadStream('./stream.js');
rr.on('readable', function() {
    console.log('readable:', rr.read().toString());
});
rr.on('end', function() {
    console.log('end');
});

//process.stdio.pipe(process.stdout);