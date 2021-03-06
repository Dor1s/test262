var ranCatch = false;
try {
  throw { x: 23 };
} catch ({ x: y }) {
  assert.sameValue(y, 23);
  assert.throws(ReferenceError, function() {
    x;
  });
  ranCatch = true;
}
assert(ranCatch, 'executed `catch` block');