var iterCount = 0;
for (let [x = 23] of [[undefined]]) {
  assert.sameValue(x, 23);
  iterCount += 1;
}
assert.sameValue(iterCount, 1, 'Iteration occurred as expected');