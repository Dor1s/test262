var iterCount = 0;
for (var [...[x, y, z]] = [3, 4, 5]; iterCount < 1; ) {
  assert.sameValue(x, 3);
  assert.sameValue(y, 4);
  assert.sameValue(z, 5);
  iterCount += 1;
}
assert.sameValue(iterCount, 1, 'Iteration occurred as expected');