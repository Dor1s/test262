var yield = 2;
var x;
var result;
var vals = [{}];
result = [{ x = yield }] = vals;
assert.sameValue(x, 2);
assert.sameValue(result, vals);