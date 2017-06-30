var iterCount = 0;
for (const [{ u: v, w: x, y: z } = { u: 444, w: 555, y: 666 }] = []; iterCount < 1; ) {
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
  iterCount += 1;
}
assert.sameValue(iterCount, 1, 'Iteration occurred as expected');