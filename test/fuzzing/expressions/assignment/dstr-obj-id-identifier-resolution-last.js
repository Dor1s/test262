var x = null;
var w;
var result;
var vals = { x: 4 };
result = { w, x } = vals;
assert.sameValue(x, 4);
assert.sameValue(result, vals);