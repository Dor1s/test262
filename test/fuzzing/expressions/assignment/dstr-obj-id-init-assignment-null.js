var x;
var result;
var vals = { x: null };
result = { x = 1 } = vals;
assert.sameValue(x, null);
assert.sameValue(result, vals);