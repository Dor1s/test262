var x = null;
var w, y;
var result;
var vals = { a: 5 };
result = { w, a: x, y } = vals;
assert.sameValue(x, 5);
assert.sameValue(result, vals);