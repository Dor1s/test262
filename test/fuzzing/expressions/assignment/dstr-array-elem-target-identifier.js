var x, y, z;
var result;
var vals = [1, 2, 3];
result = [x, y, z] = vals;
assert.sameValue(x, 1);
assert.sameValue(y, 2);
assert.sameValue(z, 3);
assert.sameValue(result, vals);