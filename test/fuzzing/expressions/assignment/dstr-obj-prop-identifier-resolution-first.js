var x = null;
var y;
var result;
var vals = { a: 3 };
result = { a: x, y } = vals;
assert.sameValue(x, 3);
assert.sameValue(result, vals);