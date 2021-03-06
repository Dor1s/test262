var iterCount = 0;
for (let [{ x, y, z } = { x: 44, y: 55, z: 66 }] of [[]]) {
  assert.sameValue(x, 44);
  assert.sameValue(y, 55);
  assert.sameValue(z, 66);
  iterCount += 1;
}
assert.sameValue(iterCount, 1, 'Iteration occurred as expected');