var o = Object.create({ x: 1, y: 2 });
o.z = 3;
var x, y, z;
var counter = 0;
for ({ x, ...{y , z} } of [o]) {
  assert.sameValue(x, 1);
  assert.sameValue(y, undefined);
  assert.sameValue(z, 3);
  counter += 1;
}
assert.sameValue(counter, 1);