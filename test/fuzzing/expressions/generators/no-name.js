var a = [function *(a) { yield a+1; return; }];
var f = a[0];
assert.sameValue(f.name, '');
var g = f(3);
assert.sameValue(g.next().value, 4);
assert.sameValue(g.next().done, true);