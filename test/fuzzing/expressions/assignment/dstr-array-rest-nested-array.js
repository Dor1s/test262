var x;
var result;
var vals = [1, 2, 3];
result = [...[x]] = vals;
assert.sameValue(x, 1);
assert.sameValue(result, vals);