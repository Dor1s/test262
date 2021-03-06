var iterCount = 0;
for (let { w: [x, y, z] = [4, 5, 6] } of [{ w: [7, undefined, ] }]) {
  assert.sameValue(x, 7);
  assert.sameValue(y, undefined);
  assert.sameValue(z, undefined);
  assert.throws(ReferenceError, function() {
    w;
  });
  iterCount += 1;
}
assert.sameValue(iterCount, 1, 'Iteration occurred as expected');