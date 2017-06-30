class D extends Date {}
var d1 = new D(1859, '10', 24, 11);
assert.sameValue(d1.getFullYear(), 1859);
assert.sameValue(d1.getMonth(), 10);
assert.sameValue(d1.getDate(), 24);
var d2 = new D(-3474558000000);
assert.sameValue(d2.getUTCFullYear(), 1859);
assert.sameValue(d2.getUTCMonth(), 10);
assert.sameValue(d2.getUTCDate(), 24);
var d3 = new D();
var d4 = new Date();
assert.sameValue(d3.getFullYear(), d4.getFullYear());
assert.sameValue(d3.getMonth(), d4.getMonth());
assert.sameValue(d3.getDate(), d4.getDate());