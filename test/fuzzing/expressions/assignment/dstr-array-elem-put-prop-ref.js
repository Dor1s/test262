var x = {};
var result;
var vals = [4];
result = [x.y] = vals;
assert.sameValue(x.y, 4);
assert.sameValue(result, vals);