var x;
var result;
var vals = { x: undefined };
result = { x = 1 } = vals;
assert.sameValue(x, 1);
assert.sameValue(result, vals);