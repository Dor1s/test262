var x = null;
var result;
var vals = { a: 2 };
result = { a: x, } = vals;
assert.sameValue(x, 2);
assert.sameValue(result, vals);