var ranCatch = false;
try {
  throw { w: [7, undefined, ] };
} catch ({ w: [x, y, z] = [4, 5, 6] }) {
  assert.sameValue(x, 7);
  assert.sameValue(y, undefined);
  assert.sameValue(z, undefined);
  assert.throws(ReferenceError, function() {
    w;
  });
  ranCatch = true;
}
assert(ranCatch, 'executed `catch` block');