var iterCount = 0;
for (var [x] = []; iterCount < 1; ) {
  assert.sameValue(x, undefined);
  iterCount += 1;
}
assert.sameValue(iterCount, 1, 'Iteration occurred as expected');