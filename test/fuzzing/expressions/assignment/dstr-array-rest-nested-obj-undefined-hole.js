var x = null;
let length;
var result;
var vals = [ , ];
result = [...{ 0: x, length }] = vals;
assert.sameValue(x, undefined);
assert.sameValue(length, 1);
assert.sameValue(result, vals);