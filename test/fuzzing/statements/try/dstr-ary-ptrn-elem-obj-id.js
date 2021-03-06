var ranCatch = false;
try {
  throw [{ x: 11, y: 22, z: 33 }];
} catch ([{ x, y, z } = { x: 44, y: 55, z: 66 }]) {
  assert.sameValue(x, 11);
  assert.sameValue(y, 22);
  assert.sameValue(z, 33);
  ranCatch = true;
}
assert(ranCatch, 'executed `catch` block');