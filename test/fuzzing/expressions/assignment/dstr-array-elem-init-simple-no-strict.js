var argument, eval;
var result;
var vals = [];
result = [arguments = 4, eval = 5] = vals;
assert.sameValue(arguments, 4);
assert.sameValue(eval, 5);
assert.sameValue(result, vals);