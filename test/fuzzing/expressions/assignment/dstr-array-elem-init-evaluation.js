var flag1 = false, flag2 = false;
var _;
var result;
var vals = [14];
result = [ _ = flag1 = true, _ = flag2 = true ] = vals;
assert.sameValue(flag1, false);
assert.sameValue(flag2, true);
assert.sameValue(result, vals);