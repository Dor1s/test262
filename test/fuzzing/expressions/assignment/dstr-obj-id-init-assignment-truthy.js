var x;
var result;
var vals = { x: 2 };
result = { x = 1 } = vals;
assert.sameValue(x, 2);
assert.sameValue(result, vals);