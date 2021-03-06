var o = {
    x: 42,
    y: 39,
    z: 'cheeseburger'
};
var x, y, z;
var result;
var vals = o;
result = { x, ...z } = vals;
assert.sameValue(x, 42);
assert.sameValue(y, undefined);
assert.sameValue(z.y, 39);
assert.sameValue(z.z, 'cheeseburger');
var keys = Object.keys(z);
assert.sameValue(keys.length, 2);
assert.sameValue(keys[0], 'y');
assert.sameValue(keys[1], 'z');
assert.sameValue(result, vals);