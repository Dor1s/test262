var s = Symbol();
var result;
var vals = s;
result = {} = vals;
assert.sameValue(result, vals);