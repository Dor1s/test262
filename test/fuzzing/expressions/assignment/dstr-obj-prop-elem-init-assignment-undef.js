var x;
var result;
var vals = { y: undefined };
result = { y: x = 1 } = vals;
assert.sameValue(x, 1);
assert.sameValue(result, vals);