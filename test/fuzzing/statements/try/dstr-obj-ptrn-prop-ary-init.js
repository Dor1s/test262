var ranCatch = false;
try {
  throw {};
} catch ({ w: [x, y, z] = [4, 5, 6] }) {
  assert.sameValue(x, 4);
  assert.sameValue(y, 5);
  assert.sameValue(z, 6);
  assert.throws(ReferenceError, function() {
    w;
  });
  ranCatch = true;
}
assert(ranCatch, 'executed `catch` block');