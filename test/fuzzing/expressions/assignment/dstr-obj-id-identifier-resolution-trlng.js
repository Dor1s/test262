var x = null;
var result;
var vals = { x: 1 };
result = { x } = vals;
assert.sameValue(x, 1);
assert.sameValue(result, vals);