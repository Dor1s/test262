var x;
var result;
var vals = { y: 2 };
result = { y: x = 1 } = vals;
assert.sameValue(x, 2);
assert.sameValue(result, vals);