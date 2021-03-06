var ranCatch = false;
try {
  throw { };
} catch ({ x: y = 33 }) {
  assert.sameValue(y, 33);
  assert.throws(ReferenceError, function() {
    x;
  });
  ranCatch = true;
}
assert(ranCatch, 'executed `catch` block');