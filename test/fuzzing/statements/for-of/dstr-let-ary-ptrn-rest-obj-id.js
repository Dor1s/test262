var iterCount = 0;
for (let [...{ length }] of [[1, 2, 3]]) {
  assert.sameValue(length, 3);
  iterCount += 1;
}
assert.sameValue(iterCount, 1, 'Iteration occurred as expected');