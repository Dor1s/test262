var ranCatch = false;
try {
  throw [{ u: 777, w: 888, y: 999 }];
} catch ([{ u: v, w: x, y: z } = { u: 444, w: 555, y: 666 }]) {
  assert.sameValue(v, 777);
  assert.sameValue(x, 888);
  assert.sameValue(z, 999);
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