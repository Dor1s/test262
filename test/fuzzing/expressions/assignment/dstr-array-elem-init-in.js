var x;
var result;
var vals = [];
result = [ x = 'x' in {} ] = vals;
assert.sameValue(x, false);
assert.sameValue(result, vals);