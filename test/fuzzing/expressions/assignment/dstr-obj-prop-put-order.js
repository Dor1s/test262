var x;
var result;
var vals = { a: 2, z: 1 };
result = { z: x, a: x } = vals;
assert.sameValue(x, 2);
assert.sameValue(result, vals);