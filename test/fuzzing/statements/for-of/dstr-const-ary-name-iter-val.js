var iterCount = 0;
for (const [x, y, z] of [[1, 2, 3]]) {
  assert.sameValue(x, 1);
  assert.sameValue(y, 2);
  assert.sameValue(z, 3);
  iterCount += 1;
}
assert.sameValue(iterCount, 1, 'iteration occurred as expected');