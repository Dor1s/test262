var iterCount = 0;
for (const [x = 23] of [[]]) {
  assert.sameValue(x, 23);
  iterCount += 1;
}
assert.sameValue(iterCount, 1, 'iteration occurred as expected');