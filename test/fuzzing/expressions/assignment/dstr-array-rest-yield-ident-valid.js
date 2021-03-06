var yield = 'prop';
var x = {};
var result;
var vals = [33, 44, 55];
result = [...x[yield]] = vals;
assert.sameValue(x.prop.length, 3);
assert.sameValue(x.prop[0], 33);
assert.sameValue(x.prop[1], 44);
assert.sameValue(x.prop[2], 55);
assert.sameValue(result, vals);