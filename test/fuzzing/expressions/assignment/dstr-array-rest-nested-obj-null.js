var x, length;
var result;
var vals = [null];
result = [...{ 0: x, length }] = vals;
assert.sameValue(x, null);
assert.sameValue(length, 1);
assert.sameValue(result, vals);