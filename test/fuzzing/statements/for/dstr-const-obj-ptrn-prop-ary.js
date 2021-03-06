var iterCount = 0;
for (const { w: [x, y, z] = [4, 5, 6] } = { w: [7, undefined, ] }; iterCount < 1; ) {
  assert.sameValue(x, 7);
  assert.sameValue(y, undefined);
  assert.sameValue(z, undefined);
  assert.throws(ReferenceError, function() {
    w;
  });
  iterCount += 1;
}
assert.sameValue(iterCount, 1, 'Iteration occurred as expected');