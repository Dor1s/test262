var x = 2;
var o = { set foo(stuff) { x=this; } }
o.foo = 3;
assert.sameValue(x, o, 'x');