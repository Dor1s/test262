var rest;
var result;
var vals = 51;
result = {...rest} = vals;
assert.notSameValue(rest, undefined);
assert.notSameValue(rest, null);
assert(rest instanceof Object);
assert.sameValue(result, vals);