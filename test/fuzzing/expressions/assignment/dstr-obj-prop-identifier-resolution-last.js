var x = null;
var w;
var result;
var vals = { a: 4 };
result = { w, a: x } = vals;
assert.sameValue(x, 4);
assert.sameValue(result, vals);