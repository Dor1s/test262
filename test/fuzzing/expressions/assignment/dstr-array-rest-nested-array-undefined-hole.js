var x = null;
var result;
var vals = [ , ];
result = [...[x]] = vals;
assert.sameValue(x, undefined);
assert.sameValue(result, vals);