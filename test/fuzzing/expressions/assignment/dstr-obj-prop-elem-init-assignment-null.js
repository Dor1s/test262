var x;
var result;
var vals = { y: null };
result = { y: x = 1 } = vals;
assert.sameValue(x, null);
assert.sameValue(result, vals);