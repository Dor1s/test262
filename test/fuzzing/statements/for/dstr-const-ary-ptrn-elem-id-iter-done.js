var iterCount = 0;
for (const [_, x] = []; iterCount < 1; ) {
  assert.sameValue(x, undefined);
  iterCount += 1;
}
assert.sameValue(iterCount, 1, 'Iteration occurred as expected');