var yield = 2;
var result, x;
var result;
var vals = { x: {} };
result = { x: { x = yield } } = vals;
assert.sameValue(x, 2);
assert.sameValue(result, vals);