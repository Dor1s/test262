var x = null;
var w, y;
var result;
var vals = { x: 5 };
result = { w, x, y } = vals;
assert.sameValue(x, 5);
assert.sameValue(result, vals);