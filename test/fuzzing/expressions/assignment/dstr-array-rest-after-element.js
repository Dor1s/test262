var x, y;
var result;
var vals = [1, 2, 3];
result = [x, ...y] = vals;
assert.sameValue(x, 1);
assert.sameValue(y.length, 2);
assert.sameValue(y[0], 2);
assert.sameValue(y[1], 3);
assert.sameValue(result, vals);