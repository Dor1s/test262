var iterCount = 0;
for (var [{ u: v, w: x, y: z } = { u: 444, w: 555, y: 666 }] of [[{ u: 777, w: 888, y: 999 }]]) {
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
  iterCount += 1;
}
assert.sameValue(iterCount, 1, 'Iteration occurred as expected');