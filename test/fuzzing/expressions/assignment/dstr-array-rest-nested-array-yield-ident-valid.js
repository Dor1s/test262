var yield = 'prop';
var x = {};
var result;
var vals = [86];
result = [...[x[yield]]] = vals;
assert.sameValue(x.prop, 86);
assert.sameValue(result, vals);