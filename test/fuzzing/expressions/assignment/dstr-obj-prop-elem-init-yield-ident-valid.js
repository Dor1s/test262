var yield = 4;
var x;
var result;
var vals = {};
result = { x: x = yield } = vals;
assert.sameValue(x, 4);
assert.sameValue(result, vals);