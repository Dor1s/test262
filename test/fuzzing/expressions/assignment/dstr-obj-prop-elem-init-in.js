var prop;
var result;
var vals = {};
result = { x: prop = 'x' in {} } = vals;
assert.sameValue(prop, false);
assert.sameValue(result, vals);