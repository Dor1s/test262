var x = {};
var result;
var vals = { xy: 4 };
result = { xy: x.y } = vals;
assert.sameValue(x.y, 4);
assert.sameValue(result, vals);