var yield = 'prop';
var x = {};
var result;
var vals = { x: 23 };
result = { x: x[yield] } = vals;
assert.sameValue(x.prop, 23);
assert.sameValue(result, vals);