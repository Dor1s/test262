var x = null;
var result;
var vals = [undefined];
result = [...[x]] = vals;
assert.sameValue(x, undefined);
assert.sameValue(result, vals);