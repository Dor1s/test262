var y;
var result;
var vals = { x: [321] };
result = { x: [y] } = vals;
assert.sameValue(y, 321);
assert.sameValue(result, vals);