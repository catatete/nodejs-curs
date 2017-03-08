var a = {};
a.v = “a”;
a.f = function(){ console.log(this.a); }
var f = a.f;
a.f();
f();
