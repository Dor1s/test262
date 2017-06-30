var f = function *(a) { yield a+1; return; };
assert.sameValue(f.name, 'f');
var g = f(3);
assert.sameValue(g.next().value, 4);
assert.sameValue(g.next().done, true);