var eval, arguments;
var result;
var vals = { eval: 1, arguments: 2 };
result = { eval, arguments } = vals;
assert.sameValue(result, vals);
assert.sameValue(eval, 1);
assert.sameValue(arguments, 2);