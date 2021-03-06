var iterCount = 0;
for (var { w: { x, y, z } = { x: 4, y: 5, z: 6 } } = { w: undefined }; iterCount < 1; ) {
  assert.sameValue(x, 4);
  assert.sameValue(y, 5);
  assert.sameValue(z, 6);
  assert.throws(ReferenceError, function() {
    w;
  });
  iterCount += 1;
}
assert.sameValue(iterCount, 1, 'Iteration occurred as expected');