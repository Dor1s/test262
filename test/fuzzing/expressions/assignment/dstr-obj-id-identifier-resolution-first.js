var x = null;
var y;
var result;
var vals = { x: 3 };
result = { x, y } = vals;
assert.sameValue(x, 3);
assert.sameValue(result, vals);