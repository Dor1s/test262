var yield = 22;
var x;
var result;
var vals = { x: [] };
result = { x: [x = yield] } = vals;
assert.sameValue(x, 22);
assert.sameValue(result, vals);