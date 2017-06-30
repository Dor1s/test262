var result;
var vals = 'string literal';
result = [,] = vals;
assert.sameValue(result, vals);