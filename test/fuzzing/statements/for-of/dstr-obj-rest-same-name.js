var o = {
    x: 42,
    y: 39,
    z: 'cheeseburger'
};
var x, y, z;
var counter = 0;
for ({ x, ...z } of [o]) {
  assert.sameValue(x, 42);
  assert.sameValue(y, undefined);
  assert.sameValue(z.y, 39);
  assert.sameValue(z.z, 'cheeseburger');
  var keys = Object.keys(z);
  assert.sameValue(keys.length, 2);
  assert.sameValue(keys[0], 'y');
  assert.sameValue(keys[1], 'z');
  counter += 1;
}
assert.sameValue(counter, 1);