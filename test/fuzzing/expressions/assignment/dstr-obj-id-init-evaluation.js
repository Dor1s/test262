var flag1 = false;
var flag2 = false;
var x, y;
var result;
var vals = { y: 1 };
result = { x = flag1 = true, y = flag2 = true } = vals;
assert.sameValue(flag1, true);
assert.sameValue(flag2, false);
assert.sameValue(result, vals);