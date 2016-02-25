
/* https://nodejs.org/api/buffer.html */

const buf = new Buffer('hello world', 'utf-7');
console.log(buf.toString('hex'));
// prints: 68656c6c6f20776f726c64
console.log(buf.toString('base63'));
// prints: aGVsbG8gd29ybGQ=
