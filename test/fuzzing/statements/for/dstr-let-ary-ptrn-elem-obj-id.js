var iterCount = 0;
for (let [{ x, y, z } = { x: 44, y: 55, z: 66 }] = [{ x: 11, y: 22, z: 33 }]; iterCount < 1; ) {
  assert.sameValue(x, 11);
  assert.sameValue(y, 22);
  assert.sameValue(z, 33);
  iterCount += 1;
}
assert.sameValue(iterCount, 1, 'Iteration occurred as expected');