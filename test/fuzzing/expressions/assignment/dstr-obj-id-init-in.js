var prop;
var result;
var vals = {};
result = { prop = 'x' in {} } = vals;
assert.sameValue(prop, false);
assert.sameValue(result, vals);