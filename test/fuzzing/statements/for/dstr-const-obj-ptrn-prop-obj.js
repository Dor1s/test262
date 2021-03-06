var iterCount = 0;
for (const { w: { x, y, z } = { x: 4, y: 5, z: 6 } } = { w: { x: undefined, z: 7 } }; iterCount < 1; ) {
  assert.sameValue(x, undefined);
  assert.sameValue(y, undefined);
  assert.sameValue(z, 7);
  assert.throws(ReferenceError, function() {
    w;
  });
  iterCount += 1;
}
assert.sameValue(iterCount, 1, 'Iteration occurred as expected');