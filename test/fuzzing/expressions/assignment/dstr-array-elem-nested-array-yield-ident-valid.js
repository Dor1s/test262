var yield = 'prop';
var x = {};
var result;
var vals = [[22]];
result = [[x[yield]]] = vals;
assert.sameValue(x.prop, 22);
assert.sameValue(result, vals);