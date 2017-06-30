var x, y;
var result;
var vals = [1, 2, 3, 4, 5, 6];
result = [, , x, , ...y] = vals;
assert.sameValue(x, 3);
assert.sameValue(y.length, 2);
assert.sameValue(y[0], 5);
assert.sameValue(y[1], 6);
assert.sameValue(result, vals);