var yield = 'prop';
var x = {};
var result;
var vals = [33];
result = [ x[yield] ] = vals;
assert.sameValue(x.prop, 33);
assert.sameValue(result, vals);