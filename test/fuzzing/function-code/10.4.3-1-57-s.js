var x = 2;
var o = { set foo(stuff) { "use strict"; x=this;  } }
o.foo = 3;
assert.sameValue(x, o, 'x');