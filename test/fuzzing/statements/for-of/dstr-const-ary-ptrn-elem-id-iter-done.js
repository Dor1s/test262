var iterCount = 0;
for (const [_, x] of [[]]) {
  assert.sameValue(x, undefined);
  iterCount += 1;
}
assert.sameValue(iterCount, 1, 'iteration occurred as expected');