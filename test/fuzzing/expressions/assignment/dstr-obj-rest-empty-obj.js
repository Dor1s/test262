var rest;
var result;
var vals = {};
result = {...rest} = vals;
assert.notSameValue(rest, undefined);
assert.notSameValue(rest, null);
assert.sameValue(typeof rest, "object");
assert.sameValue(result, vals);