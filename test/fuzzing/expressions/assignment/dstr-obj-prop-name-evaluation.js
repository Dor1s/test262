var x, y, xy;
var result;
var vals = { x: 1, xy: 23, y: 2 };
result = { ['x' + 'y']: x } = vals;
assert.sameValue(x, 23);
assert.sameValue(y, undefined);
assert.sameValue(xy, undefined);
assert.sameValue(result, vals);