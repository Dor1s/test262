var iterCount = 0;
for (const [[x, y, z] = [4, 5, 6]] = []; iterCount < 1; ) {
  assert.sameValue(x, 4);
  assert.sameValue(y, 5);
  assert.sameValue(z, 6);
  iterCount += 1;
}
assert.sameValue(iterCount, 1, 'Iteration occurred as expected');