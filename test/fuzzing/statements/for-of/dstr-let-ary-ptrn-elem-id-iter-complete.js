var iterCount = 0;
for (let [x] of [[]]) {
  assert.sameValue(x, undefined);
  iterCount += 1;
}
assert.sameValue(iterCount, 1, 'Iteration occurred as expected');