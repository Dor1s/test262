var ranCatch = false;
try {
  throw [];
} catch ([{ u: v, w: x, y: z } = { u: 444, w: 555, y: 666 }]) {
  assert.sameValue(v, 444);
  assert.sameValue(x, 555);
  assert.sameValue(z, 666);
  assert.throws(ReferenceError, function() {
    u;
  });
  assert.throws(ReferenceError, function() {
    w;
  });
  assert.throws(ReferenceError, function() {
    y;
  });
  ranCatch = true;
}
assert(ranCatch, 'executed `catch` block');