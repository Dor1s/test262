var x = {};
var result;
var vals = [4, 3, 2];
result = [...x.y] = vals;
assert.sameValue(x.y.length, 3);
assert.sameValue(x.y[0], 4);
assert.sameValue(x.y[1], 3);
assert.sameValue(x.y[2], 2);
assert.sameValue(result, vals);