var obj = {
    *foo(a) { yield a+1; return; }
};
var g = obj.foo(3);
assert.sameValue(g.next().value, 4);
assert.sameValue(g.next().done, true);