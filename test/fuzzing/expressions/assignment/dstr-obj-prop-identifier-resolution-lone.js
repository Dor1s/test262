var x = null;
var result;
var vals = { a: 1 };
result = { a: x } = vals;
assert.sameValue(x, 1);
assert.sameValue(result, vals);