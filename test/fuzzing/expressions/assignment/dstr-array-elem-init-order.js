var x = 0;
var a, b;
var result;
var vals = [];
result = [ a = x += 1, b = x *= 2 ] = vals;
assert.sameValue(a, 1);
assert.sameValue(b, 2);
assert.sameValue(x, 2);
assert.sameValue(result, vals);