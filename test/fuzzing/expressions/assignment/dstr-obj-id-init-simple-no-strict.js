var eval, arguments;
var result;
var vals = {};
result = { eval = 3, arguments = 4 } = vals;
assert.sameValue(eval, 3);
assert.sameValue(arguments, 4);
assert.sameValue(result, vals);