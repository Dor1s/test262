var x;
var result;
var vals = [{ x: 2 }];
result = [{ x }] = vals;
assert.sameValue(x, 2);
assert.sameValue(result, vals);