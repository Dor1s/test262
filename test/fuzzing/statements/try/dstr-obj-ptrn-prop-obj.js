var ranCatch = false;
try {
  throw { w: { x: undefined, z: 7 } };
} catch ({ w: { x, y, z } = { x: 4, y: 5, z: 6 } }) {
  assert.sameValue(x, undefined);
  assert.sameValue(y, undefined);
  assert.sameValue(z, 7);
  assert.throws(ReferenceError, function() {
    w;
  });
  ranCatch = true;
}
assert(ranCatch, 'executed `catch` block');