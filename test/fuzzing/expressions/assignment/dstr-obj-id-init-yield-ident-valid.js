var yield = 3;
var x;
var result;
var vals = {};
result = { x = yield } = vals;
assert.sameValue(x, 3);
assert.sameValue(result, vals);